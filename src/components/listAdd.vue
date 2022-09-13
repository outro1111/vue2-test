<template>
  <div id="listAdd">
    <h2>글쓰기</h2>
    <form v-if="!submitted">
      <label for="title">타이틀</label>
      <input type="text" id="title" v-model.lazy="list.title" required />
      <label for="content">내용</label>
      <textarea id="content" v-model.lazy="list.content"></textarea>
      <div id="category">
        <input type="checkbox" value="news" id="category1" v-model="list.categories" />
        <label for="category1">News</label>
        <input type="checkbox" value="social" id="category2" v-model="list.categories" />
        <label for="category2">Social</label>
        <input type="checkbox" value="Story" id="category3" v-model="list.categories" />
        <label for="category3">Story</label>
      </div>
      <label for="user">글쓴이</label>
      <select id="user" v-model="list.user">
        <option disabled value="">선택하세요</option>
        <option v-for="user in users" :key="user.id">{{ user }}</option>
      </select>
      <span class="btn_basic"><button v-on:click.prevent="post">등록</button></span>
    </form>
    <div v-if="submitted">
      <h3>글이 등록되었습니다!</h3>
    </div>
    <div id="preview">
      <h3>미리보기</h3>
      <p>타이틀: {{ list.title }}</p>
      <p>내용: </p>
      <p class="contnet">{{ list.content }}</p>
      <ul>
        <li v-for="category in list.categories" :key="category.id">{{ category }}</li>
      </ul>
      <p>글쓴이: {{ list.user }}</p>
    </div>
    <span v-if="submitted" class="btn_basic"><router-link to="/appList">목록으로</router-link></span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list: {
        title: "",
        content: "",
        categories: [],
        user: ""
      },
      users: ['jQuery', 'Angular', 'React', 'Vue'],
      submitted: false,
    }
  },
  methods: {
    post: function(){
      this.$http.post('https://vue-project-1a217.firebaseio.com/list.json', this.list).then(() => {
        // console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style scoped>
label {display:block;margin:20px 0 5px}
input[type="text"], textarea {display:block;width:100%;padding:8px;border:1px solid #aaa}
#category input {display:inline-block;}
#category label {display:inline-block;margin-right:10px;padding-left:5px}
ol, ul, li {list-style:disc inside;}
#preview {padding:10px 20px;border:1px dotted #ccc;margin:30px 0}
#preview p {padding:10px 20px}
#preview ul {padding:10px 20px}
#preview .contnet {padding:0 20px 10px;margin-top:-5px;white-space:pre-line}
#preview .image img {width:200px}
h3 {margin-top:10px}
</style>
