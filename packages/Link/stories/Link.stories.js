import xxbLink from "../src/Link.vue";

export default {
  title: "xxbLink",
  component: xxbLink,
};

export const Link = (_) => ({
  components: { xxbLink },
  template: `
    <div>
      <xxb-Link></xxb-Link>
    </div>
  `,
});
