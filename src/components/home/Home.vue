<template>
<div class="buyer-layout py-5">
<b-container class="bv-example-row bv-example-row-flex-cols mt-5">
  <div class="buyer-overlay p-5">
  <h5>ДЕТСКИ ИГРАЧКИ</h5>
  <br>
  <div class="row">
    <div class="col-md-3">
<b-img center src="https://comsed.net/image/cache/catalog/toys/391042/391042-1-1200x1000.webp" class="img-thumbnail"
 alt="Center image"/>
  </div>
<div class="col-md-9">
</div>
  </div>
  <br>
 <div class="row">
    <div class="col-md-3">
<b-img center src="https://www.jumbo-e.com/wp-content/uploads/2019/02/SF0321-360x360.jpg" class="img-thumbnail"
 alt="Center image"/>
  </div>
<div class="col-md-9">
</div>
  </div>
  <br>
  <div class="row">
    <div class="col-md-3">
<b-img center src="http://www.jdesign-bg.com/img/PGALERIA_BIG/watm_BIG_novina_153484453626180.jpg" class="img-thumbnail"
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



