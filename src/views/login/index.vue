<template>
  <div>
    <Button type="info" @click="logins">登录</Button>
  </div>
</template>

<script>
import { Button } from "vant";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("user");
export default {
  name: "Login",
  components: { Button },
  data() {
    return {};
  },
  methods: {
    ...mapActions({ getOpenId: "OPEN_ID" }),
    logins() {
      this.getOpenId("6666");
    },
  },
};
</script>

<style lang="scss" scoped></style>
