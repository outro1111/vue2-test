<template>
  <footer>
    <p> &copy; VueJS footer Copyright 2019 by VueJS. All Rights Reserved.</p>
  </footer>
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
footer {position:relative;margin:20px;padding:20px;border-top:1px solid #ddd;transition:transform .4s ease}
.navslide_open + .contents + footer {transform:translate3d(-40px, 0px, 0px);}
</style>
