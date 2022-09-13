<template>
  <div id="listView">
    <h2>상세보기</h2>
    <h3>{{ list.title }}</h3>
    <article>{{ list.content }}</article>
    <p>글쓴이: {{ list.user }}</p>
    <ul>
      <li v-for="category in list.categories" :key="category.id">{{ category }}</li>
    </ul>
    <span class="btn_basic"><router-link to="/appList">뒤로가기</router-link></span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
      list: {}
    }
  },
  created() {
    this.$http.get('https://vue-project-1a217.firebaseio.com/list/' + this.id + '.json').then((result) => {
      return result.data;
    }).then((result) => {
      this.list = result;
      // console.log(result);
    })

  }
}
</script>

<style scoped>
article {padding:20px 0}
ul {padding:20px 0}
</style>
