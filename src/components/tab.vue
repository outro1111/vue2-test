<template>
  <div v-show="isActive"><slot></slot></div>
</template>

<script>
export default {
  data(){
    return {
      isActive: false
    }
  },
  props: {
      name: { required: true },
      title: { required: true },
      selected: { default: false}
  },
  mounted() {
    this.isActive = this.selected;
    if (this.href === window.location.hash) {
        this.isActive = true;
    }
  },
  computed: {
    href() {
        return '#' + this.name.toLowerCase().replace(/ /g, ' ');
    }
  }
}
</script>
