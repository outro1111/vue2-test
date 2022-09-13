<template>
  <div id="imagePreview">
    <label for="image">이미지</label>
    <input type="file" id="image" ref="imageFile" accept="image/*" v-on:change="imageUpload" />
    <div id="preview">
      <h3>미리보기</h3>
      <p>이미지: </p>
      <p class="image"><img v-bind:src="imageSrc" v-show="showPreview"/></p>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imageFile: "",
      showPreview: false,
      imageSrc: ""
    }
  },
  methods: {
    imageUpload(){
      this.imageFile = this.$refs.imageFile.files[0];
      let reader = new FileReader();
      reader.addEventListener("load", function () {
        this.showPreview = true;
        this.imageSrc = reader.result;
      }.bind(this), false);
      if( this.imageFile ){
        if ( /\.(jpe?g|png|gif)$/i.test( this.imageFile.name ) ) {
          reader.readAsDataURL( this.imageFile );
        }
      }
    },
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
h3 {margin-top:10px}
</style>
