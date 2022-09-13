<template>
  <div id="list">
    <h2>목록</h2>
    <input type="text" v-model="search" placeholder="리스트 검색" />
    <transition-group name="list" tag="div">
      <div v-for="(list, index, num) in filterLists" :key="list.id" class="list-table">
        <h2><router-link v-bind:to="'/appList/appListView/' + list.id">{{ list.title | snippet }}</router-link></h2>
        <article>{{ list.content | snippet }}</article>
        <button class="btn_delete" v-on:click.prevent="deleteData(list, index, num)">삭제</button>
      </div>
    </transition-group>
    <span class="btn_basic"><router-link to="/appList/appListAdd">글쓰기</router-link></span>
  </div>
</template>

<script>
export default {
  // metaInfo: {
  //   title: '목록 | vue-test',
  //   meta: [
  //     { name: 'description', content: '목록입니다' },
  //     { name: 'keywords', content: '목록키워드' },
  //     { property: 'og:site_name', content: 'vue-test' },
  //     { property: 'og:title', content: '목록 | vue-test' },
  //     { property: 'og:description', content: '목록입니다' },
  //     { property: 'og:url', content: 'https://www.my-site.com/my-special-page' },
  //     { property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg' }
  //   ]
  // },
  data(){
    return {
      lists: [],
      search: '',
      getUrl: 'https://vue-project-1a217.firebaseio.com/list'
    }
  },
  created(){
    this.getData();
  },
  methods: {
    getData: function() {
      this.$http.get(this.getUrl + '.json').then((result) => {
        return result.data;
      }).then((result) => {
        var listsArray = [];
        for (let key in result){
          result[key].id = key
          listsArray.push(result[key]);
        }
        this.lists = listsArray.reverse().slice(0, 10);
        // console.log(listsArray);
      })
      // .catch((error) => {
          // console.log('error');
      // })
    },
    deleteData (index, num){
      this.$http.delete(this.getUrl + '/' + index.id + '.json').then(() => {
        this.lists.splice(num, 1);
        // console.log(num);
        this.getData();
      });
    }
  },

  computed: {
    filterLists: function(){
      return this.lists.filter((list) => {
        return list.title.match(this.search);
      });
    }
  },
  filters: {
    snippet: function (value) {
      var maxLength = 200;
      if (value.length < maxLength) {
        return value;
      }
      return value.substring(0, maxLength) + '...';
    }
  },

}
</script>

<style scoped>
input[type="text"], textarea {display:block;width:100%;padding:8px;border:1px solid #aaa}
#list {min-width:800px;margin:0 auto;}
.list-table {padding:20px;margin:20px 0;box-sizing:border-box;background:#eee;transition: all .3s ease}
.list-enter-active, .list-leave-active {transition: all .3s ease;}
.list-leave-to {opacity: 0;transform:translate3d(40px, 0px, 0px);}
/* .list-leave-to + .list-table {transform: translateY(-60px);} */
.btn_delete {padding:0 10px;margin-top:10px;border:1px solid #aaa;background:#fff}
</style>
