<template>
<div class="price-layout py-5">
<div class="container pt-3">
    <div class="price-overlay p-4">
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Наименование на обекта</th>
      <th scope="col">Площ в кв.м</th>
      <th scope="col">Цена</th>
      <th scope="col">Описание на имота</th>
      <th scope="col">Локация</th>
      <th scope="col">Статус</th>
    </tr>
  </thead>
  <tbody v-if="getBuildingsList.length">
    <tr 
      v-for="(building, index) in getBuildingsList"
      :key="building._id">
      <th scope="row">{{index}}</th>
      <td>{{building.buildingname}}</td>
      <td>{{building.area}}</td>
      <td>{{building.price}}</td>
      <td>{{building.description}}</td>
      <td>{{building.location}}</td>
      <td>свободен</td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
</div>
</template>

<script>
  import actions from '../../store/action-types';
  export default {
    data() {
      return {
        
      }
    }, 
    mounted() {
      this.$store.dispatch(actions.GET_BUILDINGS);
    },
    computed: {
      getBuildingsList() {
        return this.$store.state.buildingsList;
      }
    }
  }
</script>



