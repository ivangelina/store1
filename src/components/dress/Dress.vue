<template>
<div class="buyer-layout py-5">
<b-container class="bv-example-row bv-example-row-flex-cols mt-5">
  <div class="buyer-overlay p-5">
  <h5>ДЕТСКИ ДРЕХИ</h5>
  <br>
  <div class="row">
    <div class="col-md-3">
<b-img center src="https://static.minimod.bg/thumbs/12/products/topolino-bebeshka-jiletka-s-ritanki-pliush-hello-world.jpg" class="img-thumbnail"
 alt="Center image"/>
  </div>
<div class="col-md-9">
</div>
  </div>
  <br>
 <div class="row">
    <div class="col-md-3">
<b-img center src="https://static.minimod.bg/thumbs/12/products/rach-komplekt-momche-siv.jpg" class="img-thumbnail"
 alt="Center image"/>
  </div>
<div class="col-md-9">
</div>
  </div>
  <br>
  <div class="row">
    <div class="col-md-3">
<b-img center src="https://ibazar.focus.bg/photosbazar/c0/pics/c035e7b7fee98dee8f18582fb7333838.jpg" class="img-thumbnail"
 alt="Center image"/>
  </div>
<div class="col-md-9">
</div>
  </div>

  </div>
  </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>



