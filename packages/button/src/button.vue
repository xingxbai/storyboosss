<template>
  <div>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "xxbButton",
  methods: {
    handleClick(e) {
      e.preventDefault();
      this.$emit("click");
    },
  },
};
</script>

<style></style>
