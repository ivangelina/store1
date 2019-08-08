<template> 
<div class="conventorbg-layout py-5">
    <br>
<b-container class="bv-example-row bv-example-row-flex-cols my-5">
    <br>
  <div class="conventorbg-overlay p-4">
  <br>
<form class="content-form"> 
<h2 class="title">BGN to EUR Converter</h2> 
<section class="items"> 
<label for="bgn" class="currency"> 
<span class="item-currency">BGN: </span> 
<input  class="primary-btn" type="number" v-model="bgn" value="Convert!" />
</label> 

<label for="euro" class="currency"> 
<span class="item-currency">EUR: </span> 
<input class="currency-value" type="number" v-model="euroFromBgn" id="euro" readonly /> 
</label> 
<input  class="primary-btn" type="button" value="Convert!" /> 
</section> 
</form> 
<br>
  </div>
  <br>
<br>

</b-container>
 
</div>
</template>


<script>
export default {
  name: 'st-convertor-bg',
  data () {
    return {
      bgn: '',
    }
  },
   computed: {
       euroFromBgn(){
        const price = (this.bgn / 1.95583).toFixed(2); 
        return price;
      },
    
    },
   
}
</script>

