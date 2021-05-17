import xxbButton from "../";

export default {
  title: "xxbButton",
  component: xxbButton,
};

export const Text = () => ({
  components: {
    xxbButton,
  },
  template: ` <xxb-button>登 录</xxb-button>`,
});
