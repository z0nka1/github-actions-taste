<template>
  <div id="container">
    <div>
      <el-select v-model="breed" placeholder="🐈选择品种" @change="onBreedChange" :loading="breedsLoading">
        <el-option v-for="breed of breedList" :key="breed.id" :label="breed.name" :value="breed.id"></el-option>
      </el-select>
    </div>
    <div id="image_container" v-loading="imageLoading">
      <el-image :src="imageUrl">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
    </div>
    <div>🐈数据来源：<a href="https://thecatapi.com/">TheCatAPI</a></div>
  </div>
</template>

<script>
import { get } from 'lodash';
import config from '../config';

export default {
  name: 'Cat',
  data () {
    return {
      breed: 'abys',
      imageUrl: '',
      imageLoading: false,
      breedsLoading: false,
      breedList: []
    }
  },
  methods: {
    onBreedChange(val) {
      const api = `https://api.thecatapi.com/v1/images/search?breed_ids=${val}`;
      this.imageLoading = true;
      this.axios.get(api).then(res => {
        const image = get(res, 'data[0].url');
        if (image) {
          this.imageUrl = image;
        } else {
          this.imageUrl = '';
          this.$message({
            showClose: true,
            message: 'No image!'
          })
        }
      }).catch(() => {
        this.$message.error('Something went wrong!');
      }).finally(() => {
        this.imageLoading = false;
      })
    },
    getBreedsList() {
      const api = 'https://api.thecatapi.com/v1/breeds';
      this.breedsLoading = true;
      this.axios.get(api, { headers: { 'x-api-key': config.CAT_API_KEY }}).then(res => {
        const data = res.data;
        if (get(data, 'length') > 0) {
          this.breedList = data;
        } else {
          this.breedList = [];
          this.$message({
            showClose: true,
            message: 'No breed data!'
          })
        }
      }).catch(() => {
        this.$message.error('Something went wrong when get breed data!');
      }).finally(() => {
        this.breedsLoading = false;
      })
    }
  },
  created() {
    this.onBreedChange(this.breed);
    this.getBreedsList();
  }
}
</script>

<style scoped>
#image_container {
  margin-top: 35px;
  min-height: 300px;
}
</style>