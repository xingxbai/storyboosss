import xxbInput from "../";

export default {
  title: "xxbInput",
  component: xxbInput,
};

export const Text = () => ({
  components: {
    xxbInput,
  },
  template: ` <xxb-input type="text" v-model="value"></xxb-input>`,
  data() {
    return {
      value: "admin",
    };
  },
});

export const Password = () => ({
  components: {
    xxbInput,
  },
  template: ` <xxb-input type="text" v-model="value" type="password"></xxb-input>`,
  data() {
    return {
      value: "123456",
    };
  },
});
