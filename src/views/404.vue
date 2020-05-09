<template>
  <div class="Page">
    <h2>404</h2>
    <div>
      <Button type="info" size="small" round @click="goback">返回</Button>
    </div>
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
    goback() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
.Page {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
