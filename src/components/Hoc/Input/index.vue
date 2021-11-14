<template>
  <div>
    <el-input v-model="value" placeholder="Hoc" @blur="onBlur" />
  </div>
</template>

<script>
export default {
  props: {
    inintValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: this.inintValue
    }
  },
  methods: {
    onBlur() {
      this.$emit('blur', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
