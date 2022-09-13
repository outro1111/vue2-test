<template>
  <div id="error">
    <p>페이지를 찾을 수 없습니다!</p>
    <span class="btn_basic"><button v-on:click="$router.go(-1)">뒤로가기</button></span>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
#error {position:fixed;top:0;left:0;right:0;bottom:0;text-align:center;background:#fff;z-index:100}
#error p {padding:10% 0 2%;text-align:center;font-size:1.5em}
</style>
