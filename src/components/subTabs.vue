<template>
  <div id="subTabs">
    <h2>서브탭</h2>
    <tabs>
        <!-- <tab name="sub1" v-bind:selected="true"> -->
        <tab name="sub1" title="이미지 미리보기">
          <h3>이미지 미리보기</h3>
          <app-imagePreview></app-imagePreview>
        </tab>
        <tab name="sub2" title="아코디언 데이타 메뉴">
          <h3>아코디언 데이타 메뉴</h3>
          <app-accordion></app-accordion>
        </tab>
        <tab name="sub3" title="아코디언 슬롯 메뉴">
          <h3>아코디언 슬롯 메뉴</h3>
          <app-accordionSlot>
            <h4 slot="title1">타이틀 슬롯1</h4>
            <p slot="content1">내용 슬롯1 <br /><img src="../assets/logo.png" alt="logo" /></p>
            <h4 slot="title2">타이틀 슬롯2</h4>
            <p slot="content2">내용 슬롯1 <br /><img src="../assets/logo.png" alt="logo" /><br /><img src="../assets/logo.png" alt="logo" /></p>
            <h4 slot="title3">타이틀 슬롯3</h4>
            <p slot="content3">내용 슬롯1 <br /><img src="../assets/logo.png" alt="logo" /><br /><img src="../assets/logo.png" alt="logo" /><br /><img src="../assets/logo.png" alt="logo" /></p>
          </app-accordionSlot>
        </tab>
        <tab name="sub4" title="아코디언 고정 메뉴">
          <h3>아코디언 고정 메뉴</h3>
          <app-accordionStatic></app-accordionStatic>
        </tab>
      </tabs>
  </div>
</template>

<script>
import appTab from './tab.vue';
import appTabs from './tabs.vue';
import appImagePreview from './imagePreview.vue';
import appAccordion from './accordion.vue';
import appAccordionSlot from './accordionSlot.vue';
import appAccordionStatic from './accordionStatic.vue';

export default {
  components: {
    'tab': appTab,
    'tabs': appTabs,
    'app-imagePreview': appImagePreview,
    'app-accordion': appAccordion,
    'app-accordionSlot': appAccordionSlot,
    'app-accordionStatic': appAccordionStatic,
  },
  data(){
    return {

    }
  },
  methods: {

  },
  mounted(){

  }
}
</script>
