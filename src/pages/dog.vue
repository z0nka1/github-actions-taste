<template>
  <div id="container">
    <div>
      <el-select v-model="breed" placeholder="Select a breed" @change="onBreedChange">
        <el-option v-for="breed of breedList" :key="breed" :label="breed" :value="breed"></el-option>
      </el-select>
    </div>
    <div id="image_container" v-loading="loading">
      <el-image :src="imageUrl">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
    </div>
    <div>数据来源：Stanford Dogs Dataset</div>
  </div>
</template>

<script>
const breedList = ['Affenpinscher', 'African', 'Airedale', 'Akita'];

export default {
  name: 'Dog',
  data () {
    return {
      breed: 'Affenpinscher',
      imageUrl: '',
      loading: false,
      breedList: breedList
    }
  },
  methods: {
    onBreedChange(val) {
      const breed = val ? val.toLowerCase() : 'akita';
      const api = `https://dog.ceo/api/breed/${breed}/images/random`;
      this.loading = true;
      this.axios.get(api).then(res => {
        if (res && res.data) {
          this.imageUrl = res.data.message;
        } else {
          alert('No image');
        }
      }).finally(() => {
        this.loading = false;
      })
    }
  },
  created() {
    this.onBreedChange(this.breed);
  }
}
</script>

<style scoped>
#image_container {
  margin-top: 35px;
  min-height: 300px;
}
</style>