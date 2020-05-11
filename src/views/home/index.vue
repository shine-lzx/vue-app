<template>
  <div class="home-container">
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

    <div class="bscroll" ref="bscroll">
      <div class="bscroll-container">
        <div v-for="i in 30" :key="i">{{i}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { Swipe, SwipeItem, Search } from "vant";
export default {
  name: "Home",
  components: {
    Swipe,
    SwipeItem,
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
  mounted() {
    this.$nextTick(() => {
      let bscrollDom = this.$refs.bscroll;
      this.aBScroll = new BScroll(bscrollDom, {});
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.home-container {
  background: #ccc;
  height: 100vh;
  width: 100%;
}

.bscroll {
  width: 100%;
  height: calc(100vh - 304px);
  overflow: hidden;
}

.my-swipe {
  .van-swipe-item {
    height: 250px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
