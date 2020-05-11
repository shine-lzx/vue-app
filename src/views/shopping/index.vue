<template>
  <div>
    购物车
    <Button type="info" @click="pay">支付</Button>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  components: {
    Button,
  },
  data() {
    return {};
  },
  methods: {
    pay() {
      let self = this;
      if (typeof window.WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener(
            "WeixinJSBridgeReady",
            self.onBridgeReady,
            false
          );
        } else if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", self.onBridgeReady);
          document.attachEvent("onWeixinJSBridgeReady", self.onBridgeReady);
        }
      } else {
        self.onBridgeReady();
      }
    },
    onBridgeReady() {
      let self = this;
      var params = {
        appId: self.orderData.appId, //公众号名称，由商户传入
        timeStamp: self.orderData.timeStamp, //时间戳，自1970年以来的秒数
        nonceStr: self.orderData.nonceStr, //随机串
        package: self.orderData.package,
        signType: self.orderData.signType, //微信签名方式:MD5
        paySign: self.paySign, //微信签名
      };
      window.WeixinJSBridge.invoke("getBrandWCPayRequest", params, function(
        res
      ) {
        if (res.err_msg == "get_brand_wcpay_request:ok") {
          self.$router.push("/Wait");
        } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
          self.$toast.center("取消支付！");
        } else {
          alert(JSON.stringify(res));
        }
      });
    },
  },
};
</script>
