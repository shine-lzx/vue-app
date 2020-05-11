<template>
  <div>
    <Search v-model="value" placeholder="请输入搜索关键词" />
    <Swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :show-indicators="false"
    >
      <SwipeItem v-for="(image, index) in images" :key="index">
        <img :src="image.url" alt="" />
      </SwipeItem>
    </Swipe>
    <div>
      <Button type="info" @click="jumpRouter()">登录页</Button>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Button, Search } from "vant";
export default {
  name: "Home",
  components: {
    Swipe,
    SwipeItem,
    Button,
    Search,
  },
  data() {
    return {
      value: "",
      images: [
        {
          index: 0,
          url: "https://img.yzcdn.cn/vant/apple-1.jpg",
        },
        {
          index: 1,
          url: "https://img.yzcdn.cn/vant/apple-2.jpg",
        },
        {
          index: 2,
          url: "https://img.yzcdn.cn/vant/apple-1.jpg",
        },
      ],
    };
  },
  methods: {
    jumpRouter() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.my-swipe {
  .van-swipe-item {
    height: 250px;
    img {
      height: 100%;
    }
  }
}
</style>
