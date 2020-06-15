<template>
  <div id="form_container">
    <el-form :model="form" :rules="rules" ref="form" label-width="80px">
      <el-form-item label="标签一" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="标签二" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="标签三" prop="type">
        <el-select v-model="form.type">
          <el-option label="选项一" value="male"></el-option>
          <el-option label="选项二" value="female"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签四">
        <el-checkbox-group v-model="form.dinner">
          <el-checkbox label="西蓝花" name="dinner"></el-checkbox>
          <el-checkbox label="番茄" name="dinner"></el-checkbox>
          <el-checkbox label="牛油果" name="dinner"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="标签五">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="标签六">
        <el-radio-group v-model="form.resource">
          <el-radio label="选项一"></el-radio>
          <el-radio label="选项二"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data: function() {
    return {
      form: {
        name: '',
        date1: '',
        date2: '',
        type: '',
        dinner: [],
        delivery: false,
        resource: ''
      },
      rules: {
        name: [
          { required: true, message: '标签一不能为空', trigger: 'change' },
          { min: 3, max: 5, message: '长度在3到5个字符', trigger: 'change' },
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change'}
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change'}
        ],
        type: [
          { required: true, message: '请选择性别', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          // eslint-disable-next-line no-console
          console.log('验证不通过');
          return false;
        } else {
          // eslint-disable-next-line no-console
          console.log(this.form);
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
#form_container {
  width: 500px;
  margin: 0 auto;
}
</style>