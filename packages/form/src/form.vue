<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "xxbForm",
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: Object,
    rules: Object,
  },
  methods: {
    validate(cb) {
      const tasks = this.$children.filter((child) => child.prop).map((child) => child.validate());
      Promise.all(tasks)
        .then(() => {
          cb(true);
        })
        .catch(() => {
          cb(false);
        });
    },
  },
};
</script>

<style></style>
