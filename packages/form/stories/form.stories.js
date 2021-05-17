import xxbForm from "../";
import xxbButton from "../../button";
import xxbFormItem from "../../formitem";
import xxbInput from "../../input";
export default {
  title: "xxbForm",
  component: xxbForm,
};

export const Login = () => ({
  components: {
    xxbInput,
    xxbButton,
    xxbForm,
    xxbFormItem,
  },
  template: `
        <xxb-form class="form" ref="form" :model="user" :rules="rules">
        <xxb-form-item label="用户名" prop="username">
          <xxb-input
            :value="user.username"
            @input="user.username = $event"
            placeholder="请输入用户名"
          ></xxb-input>
        </xxb-form-item>
        <xxb-form-item label="密码" prop="password">
          <xxb-input type="password" v-model="user.password"></xxb-input>
        </xxb-form-item>
        <xxb-form-item>
          <xxb-button type="primary" @click="login">登 录</xxb-button>
        </xxb-form-item>
      </xxb-form>
      `,
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
          },
          {
            min: 6,
            max: 12,
            message: "请输入6-12位密码",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      console.log("button", this.user);
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert("验证成功");
        } else {
          alert("验证失败");
          return false;
        }
      });
    },
  },
});
