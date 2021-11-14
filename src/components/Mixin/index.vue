<template>
  <div>
    <input type="text" @blur="blur">
    {{ Errmsg }}
  </div>
</template>

<script>
import ValidateMixin from './mixin.vue'
export default {
  mixins: [ValidateMixin],
  data() {
    return {
      Errmsg: ''
    }
  },
  methods: {
    blur() {
      this.validate()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
