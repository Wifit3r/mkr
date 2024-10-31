<template>
<div class="button-container">
    <button @click="Add" class="btn">Додавання елементів</button>
    <button @click="Delete" class="btn">Видалення елементів</button>
    <button @click="Filter" class="btn">Фільтрувати</button>
  </div>
</template>
<script>
export default {
  name: 'VueHeader',
  methods: {
    Add() {
      this.$router.push({ name: 'AddEmployee' });
    },
    Delete(){
        this.$router.push({name:'delete'});
    },
    Filter() {
      this.$router.push({ name: 'filter' });
    }
    
  }
}
</script>
<style scoped>
.button-container {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>