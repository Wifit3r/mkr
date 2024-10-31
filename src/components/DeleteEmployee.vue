
<template>
    <h3>Видалити співробітника</h3>
    <form @submit.prevent="deleteEmployee">
      <label for="name">Введіть імя </label>
      <input type="text" v-model="fullName" id="name" required>
      <button type="submit">Видалити</button>
    </form>
</template>

<script>

    export default{
      name:"DeleteEmployee",
        data() {
        return {
            fullName:''
            };
        },
  
  methods: {
    deleteEmployee() {
      if (this.fullName)
    {
     this.$store.dispatch('deleteEmployee', this.fullName);
    } 
      else 
      {
        alert('Будь ласка, введіть коректні дані');
      }
    },
    }
}
</script>