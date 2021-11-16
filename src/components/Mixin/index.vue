<script>
export default {
  methods: {
    validate(value, Errmsg) {
      const rules = /a/
      console.log(rules.test(value))
      console.log(value)
      if (rules.test(value)) {
        this.Errmsg = ''
      } else {
        this.Errmsg = '请输入一个包含a的字符串'
      }
      return true
    }
  }
}
</script>
