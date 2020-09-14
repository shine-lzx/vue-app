<template>
  <div class="container">
    <div class="title">支付结果</div>
    <div class="imgContainer">
      <img :src="payFailImg" alt srcset />
    </div>
    <div class="payDesc">支付成功</div>
    <div class="actionContainer">
      <Button round block type="info">返回</Button>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  components: {
    Button,
  },
  data() {
    return {
      paySuccImg: require('@/assets/images/icon1.png'),
      payFailImg: require('@/assets/images/icon2.png'),
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 16px;
  text-align: center;
}

.imgContainer {
  margin-top: 65px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.payDesc {
  font-size: 18px;
  text-align: center;
}

.actionContainer {
  margin-top: 93px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
