
<template>
    <h3>Введіть данні пояким буде фільтрація</h3>
    <form @submit.prevent="filterEmployee">
      <input type="text" v-model="value" id="name" required>
      <button type="submit">Фільтрувати</button>
    </form>
</template>

<script>

    export default{
      name:"filterEmployee",
        data() {
        return {
            value:''
            };
        },
  
  methods: {
    filterEmployee() {
      if (this.value)
    {
     this.$store.dispatch('FilterEmployee', this.value);
    } 
      else 
      {
        alert('Будь ласка, введіть коректні дані');
      }
    },
    }
}
</script>