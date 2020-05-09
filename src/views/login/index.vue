<template>
  <div>
    login
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("user");
export default {
  name:'Login',
  data() {
    return {};
  },
  methods: {
    ...mapActions({}),
  },
};
</script>

<style lang="scss" scoped></style>
