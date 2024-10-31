/* eslint-disable *
<template>
  <VueHeader></VueHeader>
  <div id="app">
    <ListEmployees></ListEmployees>
    <!-- <AddEmployee></AddEmployee>
    <DeleteEmployee></DeleteEmployee>
    <FilterEmployee></FilterEmployee> -->
    <router-view></router-view>
  </div>
</template>

<script>
import ListEmployees from "./components/ListEmployee.vue";
import VueHeader from './components/v-header.vue';
// import AddEmployee from "./components/AddEmployee.vue";
// import DeleteEmployee from "./components/DeleteEmployee.vue";
// import FilterEmployee from "./components/FilterEmployee.vue";
export default {
  components:{
    ListEmployees,
    // AddEmployee,
    // DeleteEmployee,
    // FilterEmployee,
    VueHeader
  }
}
</script>

<style>

</style>
