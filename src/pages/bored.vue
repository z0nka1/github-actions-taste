<template>
  <div>
    <el-form :model="formData" :inline="true">
      <el-form-item label="类型">
        <el-select v-model="formData.type">
          <el-option v-for="type of typeList" :label="type.label" :value="type.value" :key="type.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="参与人数">
        <el-input-number></el-input-number>
      </el-form-item>
    </el-form>
    <div v-loading="loading" id="advice_container">"{{advice}}"</div>
  </div>
</template>

<script>
import { get } from 'lodash';
export default {
  name: 'Bored',
  data() {
    return {
      formData: {
        type: '',
        participants: 1,
      },
      typeList: [
        { label: '教育', value: 'education' },
        { label: '休闲', value: 'recreational' },
        { label: '社交', value: 'social' },
        { label: 'DIY', value: 'diy' },
        { label: '慈善', value: 'charity' },
        { label: '烹饪', value: 'cooking' },
        { label: '娱乐', value: 'relaxation' },
        { label: '音乐', value: 'music' },
        { label: '工作', value: 'busywork' }
      ],
      advice: '',
      loading: false
    }
  },
  methods: {
    getAdvice() {
      const api = 'http://www.boredapi.com/api/activity/';
      this.loading = true;
      this.axios.get(api).then(res => {
        const advice = get(res, 'data.activity');
        this.advice = advice || '无结果';
      }).catch(err => {
        this.advice = err;
      }).finally(() => {
        this.loading = false;
      })
    }
  },
  created() {
    this.getAdvice();
  }
}
</script>

<style scoped>
#advice_container {
  color: #999;
  font-size: 30px;
  margin-top: 50px;
}
</style>