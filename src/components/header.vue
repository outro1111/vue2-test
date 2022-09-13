<template>
  <div id="header" v-bind:class="{navslide_open: navSlideOpen}">
    <div id="navTop">
      <h1><router-link to="/">HOME</router-link></h1>
      <nav>
        <ul>
          <li v-for="(navMenu, index) in navMenus" :key="navMenu.id" v-bind:class="'navMenu' + index"><router-link v-bind:to="navMenu.url">{{ navMenu.title }}</router-link></li>
        </ul>
      </nav>
    </div>
    <button class="btn_nav" v-on:click="navSlideOpen = !navSlideOpen, openClose = !openClose">{{ openClose ? '메뉴닫기' : '메뉴열기' }}</button>
    <div id="navSlide">
      <nav>
        <ul>
          <li v-for="(navMenu, index) in navMenus" :key="navMenu.id" v-bind:class="'navMenu' + index"><router-link v-bind:to="navMenu.url" v-on:click.native="navSlideOpen = !navSlideOpen">{{ navMenu.title }}</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="wrap_dim"><div v-on:click="navSlideOpen = !navSlideOpen"></div><span></span></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      navMenus: [
        {title: 'Home', url: '/'},
        {title: '목록', url: '/appList'},
        {title: '서브탭', url: '/appSubTabs'}
      ],
      navSlideOpen: false,
      openClose: false
    }
  },
  methods: {
    // btnToggle(){
      // this.$refs.btnNav.innerText = '메뉴열림' ? '메뉴닫힘' : '메뉴열림';
    // }
  }
}
</script>

<style scoped>
#navTop {position:fixed;width:100%;background:#444;padding:15px;margin-bottom:40px;z-index:50;transition:transform .4s ease}
#navTop h1 {display:inline-block;color:#fff;padding:0;margin:0 0 0 25px;vertical-align:middle}
#navTop nav {display:inline-block;vertical-align:middle;margin-left:20px}
#navTop ul {display:inline-block;list-style-type:none;text-align:center;margin:0;padding:0}
#navTop li {display:inline-block;margin:0 10px}
#navTop a {text-decoration:none;padding:6px 8px;border-radius:6px}

#navSlide {position:fixed;top:0;right:-300px;bottom:0;width:300px;background:#fff;transition:transform .4s ease;z-index:55}
.navslide_open #navSlide {transform:translate3d(-300px, 0px, 0px);}
.btn_nav {position:fixed;top:28px;right:20px;display:inline-block;width:60px;text-align:left;color:#fff;transition:color .4s ease;z-index:60}
.navslide_open .btn_nav {color:#444}
#navSlide ul {margin:80px 10px 0}
#navSlide ul li a {display:block;padding:5px 10px;margin:10px 0;color:#444}
.wrap_dim div {position:fixed;top:0;left:0;width:100%;height:100%;opacity:0;background:#000;transition:z-index 0.4s step-end, opacity .4s ease;z-index:-10}
.wrap_dim span {display:block;position:fixed;top:0;left:0;width:100%;height:100%;opacity:0;background:none;z-index:-1}
.navslide_open #navSlide + .wrap_dim div {opacity:0.7;z-index:50;transition:z-index 0.6s step-start, opacity .4s ease}
.navslide_open #navTop {transform:translate3d(-40px, 0px, 0px);}

a {color:#fff}
a.exact_active, a.active {background:#eee;color:#444}
h1 .exact_active, h1 .active {background:none;color:#fff}
.navMenu0 a.active {color:#fff;background:none}
.navMenu0 a.exact_active {background:#eee;color:#444}
</style>
