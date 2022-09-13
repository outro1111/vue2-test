<template>
  <div class="accordions">
      <dl v-for="accordion in accordions" v-bind:class="{'active': accordion.show}" v-bind:key="accordion.id">
        <!-- <dt><button v-on:click="accordion.show = !accordion.show">{{ accordion.title }}</button></dt> -->
        <dt><button v-on:click="toggle(accordion)">{{ accordion.title }}</button></dt>
        <dd v-html="accordion.content"><!-- {{ accordion.content }} --></dd>
      </dl>
    <!-- <dl> -->
      <!-- <dt><button v-on:click="toggle(1)">아코디언 메뉴2</button></dt> -->
      <!-- <dd v-show="show == false">내용2</dd> -->
    <!-- </dl> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      accordions: [
        {id: 'ac1', title: '타이틀1', content: '내용1 <br />내용1 <br />내용1 <br />내용1 <br />내용1 <br />내용1', show: true},
        {id: 'ac2', title: '타이틀2타이틀2타이틀2타이틀2타이틀2타이틀2타이틀2타이틀2타이틀2', content: '내용2', show: false},
        {id: 'ac3', title: '타이틀3', content: '내용3 <br /> ', show: false}
      ],
    }
  },
  methods: {
    toggle(selected){
      this.accordions.forEach(accordion => {
        if(accordion.show == true){
          accordion.show = false;
        } else {
          accordion.show = (accordion.id == selected.id);
        }
        // accordion.show = accordion.show ? false : (accordion.id == selected.id);
        // console.log(accordion.show);
      });

    }

  },
  mounted(){

  }
}
</script>

<style scoped>
.accordions dl {background:#eee;margin:10px 0;padding:10px}
.accordions dl dt button {position:relative;width:100%;text-align:left;padding-right:20px}
.accordions dl dt button:after {content:"";position:absolute;right:5px;top:5px;width:17px;height:10px;background:url("../assets/images/ico_down.png") right center no-repeat;}
.accordions dl.active dt button:after {transform: rotate(-180deg);}
.accordions dl dd {background:#fff;padding:0 10px;transition:all .4s;height:0;overflow:hidden}
.accordions dl.active dd {height:auto;margin-top:10px;padding:10px;}
</style>
