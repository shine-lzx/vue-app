<template>
  <div>
    <div class="user-container">
      <div class="form">
        <div class="imgs">
          <img src="../../assets/images/logo@2x.png" alt="" />
        </div>
        <Form @submit="onSubmit">
          <Field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <Field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <Button round block type="info" native-type="submit">
              提交
            </Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Form, Field } from "vant";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("user");
export default {
  name: "Login",
  components: { Button, Form, Field },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({ getOpenId: "OPEN_ID" }),
    onSubmit() {
      localStorage.setItem("isLogin", 1);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.user-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  background-size: cover;
}

.form {
  position: relative;
  height: 100vh;
  overflow-y: auto;
  width: 100%;
}

.imgs {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
}
</style>
