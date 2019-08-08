<template>
<div class="buyer-layout py-5">
<b-container class="bv-example-row bv-example-row-flex-cols mt-5">
  <div class="buyer-overlay p-5">
  <h3>ДЕТСКИ И БЕБЕШКИ ХРАНИ</h3>
  <br>
  <div class="row">
    <div class="col-md-3">
<b-img center src="http://slantcho.com/wp-content/uploads/2018/02/krusha-i-praskova-1.png" class="img-thumbnail"
 alt="Center image"/>
  </div>
<div class="col-md-9">
  <h4>ДЕТСКО ПЮРЕ "СЛЪНЧО" - ПРАСКОВА И КРУША.
    <br>
  ПОДХОДЯЩО ЗА ДЕЦА ОТ 6 МЕСЕЦА ДО 3 ГОДИНИ.<br><br>
  ЦЕНА:     1,5ЛВ ЗА 1 БРОЙ.<br><br>
  ПОРЪЧАЙ НА ТЕЛЕФОН: 032 672015.<br><br><br>
  ПРОИЗВОДИТЕЛ: ФИРМА "СЛЪНЧО И МЕСЕЧКО" ЕООД, ГРАД ПЛОВДИВ, УЛИЦА "ЛУНА" №101</h4>
</div>
  </div>
  <br>
 <div class="row">
    <div class="col-md-3">
<b-img center src="http://slantcho.com/wp-content/uploads/2013/08/3_Sluncho_Carevichno-orizova_new-.png" class="img-thumbnail"
 alt="Center image"/>
  </div>
<div class="col-md-9">
  <h4>ДЕТСКА КАША "СЛЪНЧО" - ОРИЗОВА.
    <br>
  ПОДХОДЯЩО ЗА ДЕЦА ОТ 6 МЕСЕЦА ДО 3 ГОДИНИ.<br><br>
  ЦЕНА:     1,5ЛВ ЗА 1 БРОЙ.<br><br>
  ПОРЪЧАЙ НА ТЕЛЕФОН: 032 672015.<br><br><br>
  ПРОИЗВОДИТЕЛ: ФИРМА "СЛЪНЧО И МЕСЕЧКО" ЕООД, ГРАД ПЛОВДИВ, УЛИЦА "ЛУНА" №101</h4>
</div>
  </div>
  <br>
  <div class="row">
    <div class="col-md-3">
<b-img center src="https://www.hipp.bg/fileadmin/_processed_/2/e/csm_AL3992_6b387359be.jpg" class="img-thumbnail"
 alt="Center image"/>
  </div>
<div class="col-md-9">
  <h4>ДЕТСКА ПАСТА "БЕБЕ" - ИТАЛИАНСКА.
    <br>
  ПОДХОДЯЩО ЗА ДЕЦА ОТ 6 МЕСЕЦА ДО 3 ГОДИНИ.<br><br>
  ЦЕНА:     1,5ЛВ ЗА 1 БРОЙ.<br><br>
  ПОРЪЧАЙ НА ТЕЛЕФОН: 032 672015.<br>
  ПРОИЗВОДИТЕЛ: ФИРМА "СЛЪНЧО И МЕСЕЧКО" ЕООД, ГРАД ПЛОВДИВ, УЛИЦА "ЛУНА" №101</h4>
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



