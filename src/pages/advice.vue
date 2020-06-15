<template>
  <div>
    <div>在这里，你可以随机获取一条建议</div>
    <div v-loading="loading" id="advice_container">"{{advice}}"</div>
  </div>
</template>

<script>
import { get } from 'lodash';
export default {
  name: 'Advice',
  data() {
    return {
      advice: '',
      loading: false
    }
  },
  methods: {
    getAdvice() {
      const api = 'https://api.adviceslip.com/advice';
      this.loading = true;
      this.axios.get(api).then(res => {
        const advice = get(res, 'data.slip.advice');
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