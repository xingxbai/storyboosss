<template>
  <div>
    <label>{{ label }}</label>
    <slot></slot>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
export default {
  name: "xxbFormItem",
  props: {
    label: String,
    prop: String,
  },
  inject: ["form"],
  data() {
    return {
      errorMessage: "",
    };
  },
  mounted() {
    this.$on("validate", this.validate);
    this.validate();
  },
  methods: {
    validate() {
      if (this.prop) {
        const rules = this.form.rules[this.prop];
        const value = this.form.model[this.prop];
        const validator = new AsyncValidator({
          [this.prop]: rules,
        });
        return validator.validate({ [this.prop]: value }, (err) => {
          if (err) {
            this.errorMessage = err[0].message;
          } else {
            this.errorMessage = "";
          }
        });
      }
    },
  },
};
</script>

<style>
.error-message {
  color: red;
  font-size: 12px;
}
</style>
