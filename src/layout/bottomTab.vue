<template>
  <Tabbar v-model="active" route slot="footer">
    <TabbarItem replace to="/home" icon="home-o">主页</TabbarItem>
    <TabbarItem replace to="/shopping" icon="shopping-cart-o">购物车</TabbarItem>
    <TabbarItem replace to="/user" icon="user-o">用户</TabbarItem>
  </Tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    Tabbar,
    TabbarItem,
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>
