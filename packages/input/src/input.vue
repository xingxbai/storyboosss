<template>
  <div>
    <input :type="type" :value="value" v-bind="$attrs" @input="handleInput" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "xxbInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: String,
  },
  methods: {
    handleInput(evt) {
      this.$emit("input", evt.target.value);
      const findParent = (parent) => {
        while (parent) {
          if (parent.$options.name === "xxbFormItem") {
            break;
          } else {
            parent = parent.$parent;
          }
        }
        return parent;
      };
      const parent = findParent(this.$parent);
      if (parent) {
        parent.$emit("validate");
      }
    },
  },
};
</script>

<style></style>
