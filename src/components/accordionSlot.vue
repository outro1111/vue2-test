<template>
  <div class="accordions">
      <dl v-for="(accordion, index) in accordions" v-bind:class="{'active': accordion.show}" v-bind:key="accordion.id">
        <dt><button v-on:click="toggle(accordion)"><slot v-bind:name="'title'+(index+1)"></slot></button></dt>
        <dd><slot v-bind:name="'content'+(index+1)"></slot></dd>
      </dl>
  </div>
</template>

<script>
export default {
  data(){
    return {
      accordions: [
        {id: 'ac1', show: true},
        {id: 'ac2', show: false},
        {id: 'ac3', show: false}
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
.accordions dl dd {transition: all .4s  cubic-bezier(0.1, 0.8, 0.2, 1.0);max-height:0;overflow:hidden}
.accordions dl.active dd {max-height:100em;transition:all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
.accordions dl dd p {padding:10px;margin-top:10px;background:#fff;}
</style>
