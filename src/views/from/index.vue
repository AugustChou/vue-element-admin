<template>
  <div>
    <HocCustomCom :value="value" :rules="rules" />
    <Area #default="{validate}" :rules="rules" :value="value2">
      <textarea v-model="value2" placeholder="RanderLess" @blur=" validate" />
    </Area>
    <input v-model="value3" type="text" placeholder="Mixin" @blur="blur">
    {{ Errmsg }}
    <div class="app-container">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="活动名称">
          <HocCustomCom :value="value" :rules="rules" />
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="上海" value="shanghai" />
            <el-option label="北京" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              v-model="form.date1"
              type="date"
              placeholder="选择日期"
              style="width: 100%"
            />
          </el-col>
          <el-col :span="2" class="line">-</el-col>
          <el-col :span="11">
            <el-time-picker
              v-model="form.date2"
              type="fixed-time"
              placeholder="选择时间"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="及时配送">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食" name="type" />
            <el-checkbox label="地摊" name="type" />
            <el-checkbox label="线下主题" name="type" />
            <el-checkbox label="单纯品牌曝光" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌赞助" />
            <el-radio label="线下场地免费" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <Area #default="{validate}" :rules="rules" :value="value2">
            <textarea v-model="value2" @blur=" validate" />
          </Area>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import HocFunc from '@/components/Hoc/Input/hoc'
import CustonInput from '@/components/Hoc/Input/index.vue'
import Area from '@/components/RandLess/index.vue'
import ValidateMixin from '@/components/Mixin/index.vue'
const HocCustomCom = HocFunc(CustonInput)
export default {
  components: {
    HocCustomCom,
    Area
  },
  mixins: [ValidateMixin],
  data() {
    return {
      value: '',
      value2: '',
      value3: '',
      Errmsg: '',
      rules: [
        {
          test: function(value) {
            return /d+/.test(value)
          },
          message: '请输入一个数字'
        }
      ],
      form: {
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    blur() {
      this.validate(this.value3, this.Errmsg)
    },
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.line {
  text-align: center;
}
</style>
