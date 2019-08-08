<template>
  <div>
<div role="group">
    <label for="inputLive">Дворно място-УПИ</label>
    <b-form-input v-model="text1" type="text" placeholder="кв. м" />

 

    <div class="mt-2">Разгъната застроена площ</div>

   <b-form-input v-model="text1" type="text" placeholder="кв. м" />

    <b-form-group
        label="Разгъната застроена площ"
        label-for="selectArray"
      >
      <b-form-select @change="selectYearChange" id="selectArray" v-model="selected" :options="options" class="mb-3" />
    </b-form-group>

     <div class="mt-2">Застроена площ</div>

   <b-form-input v-model="text1" type="text" placeholder="кв. м" />

  </div>

  </div>
  


</template>

<script>
export default {
  name: 'st-select-array',
  data () {
    return {
      selected: '1000',
      options: [
        { value: null, text: 'Избери площ кв.м' },
        { value: '1000', text: '1000' },
        { value: '1200', text: '1200' },
        { value: '1500', text: '1500' },
        { value: '2000', text: '2000'}
      ]
    }
  },
  methods: {
    selectArrayChange(value){
      if(value){
        this.$emit('selectArrayChange', value);
      }
    }
  }
}
</script>