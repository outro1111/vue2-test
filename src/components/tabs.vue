<template>
  <div class="tabs">
    <ul>
      <li v-for="tab in tabs" v-bind:class="{'active': tab.isActive}" v-bind:key="tab.id">
          <a v-bind:href="tab.href" v-on:click="selectTab(tab)">{{ tab.title }}</a>
      </li>
    </ul>
    <div class="tabs_details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tabs: []
    }
  },
  methods: {
    selectTab(selectedTab){
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
      // console.log(selectedTab.name)
    }
  },
  created() {
    this.tabs = this.$children;
  },
  mounted : function () {
    if (window.location.hash === '' ) {
        this.tabs[0].isActive = true;
    }
  }
}
</script>

<style scoped>
.tabs ul {display:flex;border-bottom:1px solid #ddd;margin-top:1em}
.tabs li {display:block;}
.tabs a {display:flex;padding:.6em 2em;color:#333;border-bottom:1px solid transparent;vertical-align:top;margin-bottom:-1px}
.tabs li.active a {color:#01b99e;border-bottom:2px solid #00d1b2;font-weight:bold}
.tabs_details {padding:2em 0}
</style>
