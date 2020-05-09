<template>
  <div class="about">
    <Button type="info" size="mini">button</Button>
    <div class="text">
      <div class="name">
        测试rem
      </div>
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
};
</script>

<style lang="scss" scoped>
.text {
  font-size: 14px;
  .name {
    font-size: 16px;
  }
}
</style>
