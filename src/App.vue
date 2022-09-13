<template>
  <div id="app">
    <app-header></app-header>
    <div class="contents">
      <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
      </transition>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './components/header.vue';
import appFooter from './components/footer.vue';

export default {
  components: {
    'app-header': appHeader,
    'app-footer': appFooter,
  },
  data() {
    return {

    };
  },
  methods: {

  }
}
</script>

<style>
html, body {height:100%;-webkit-text-size-adjust:none;font-family:'Nanum Barun Gothic','Malgun Gothic','맑은 고딕',dotum,sans-serif;font-size:14px;color:#222124;font-style:normal;}
html, body, div, span, form, input, select, button, textarea, legend, fieldset, h1, h2, h3, h4, h5, h6, ul, ol, dl, li, dt, dd, blockquote, address, p, th, td, caption {margin:0;padding:0;line-height:1.6;box-sizing:border-box;}
ol, ul, li {list-style:none;}
em, dt, dd, address {font-style:normal}
img {vertical-align:top}
img, fieldset {border:0 none;}
button, select, input, textarea {font-family:'Nanum Barun Gothic','Malgun Gothic','맑은 고딕',dotum,sans-serif;outline:none}
button {border:0 none;background:transparent;cursor:pointer}
hr {display:none;}
legend, .skip, .blind, .skip_nav {width:0;height:0;visibility:hidden;font-size:0;line-height:0;position:absolute;top:0;left:-9999em;overflow:hidden;}
table caption {display:none}
table {border-collapse:collapse;border-spacing:0}
header, footer, section, article, aside, nav, hgroup, details, menu, figure, figcaption {display:block;}
a:link, a:visited {text-decoration:none}
a:hover, a:active {text-decoration:none}
label {padding-right:10px}
input, select, textarea {vertical-align:middle}
input, textarea {-webkit-appearance:none;-webkit-border-radius:0;}
input[type="checkbox"] {-webkit-appearance:checkbox}
input[type="radio"] {-webkit-appearance:radio;-webkit-border-radius:10px;width:13px;height:13px;margin:0 0 3px;padding:0}
textarea {border:1px solid #b2b2b2;overflow:scroll;overflow-x:hidden}
/* select {height:26px;border:1px solid #ddd;padding:0 20px 0 8px;vertical-align:middle} */
strong, h1, h2, h3, h4, h5, h6 {font-weight:normal}

.contents {padding:100px 50px 20px;min-height:400px;transition:transform .4s ease;z-index:1}
.navslide_open + .contents {transform:translate3d(-40px, 0px, 0px);}

.slide-fade-enter-active {transition: all 1s ease;}
.slide-fade-leave-active {transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
.slide-fade-enter, .slide-fade-leave-to {transform: translateX(30px);opacity: 0;}

.btn_basic {display:block;margin-top:20px;text-align:center}
.btn_basic button, .btn_basic a {padding:5px 30px;border:1px solid #aaa}
</style>
