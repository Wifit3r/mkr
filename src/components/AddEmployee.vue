
<template>
  <div class="form-container">
    <h3>Додати нового співробітника</h3>
    <form @submit.prevent="addEmployee">
      <label for="fullName">Прізвище Ім’я По-батькові:</label>
      <input type="text" v-model="newEmployee.fullName" id="fullName" required>

      <label for="position">Посада:</label>
      <input type="text" v-model="newEmployee.position" id="position" required>

      <label for="officePhone">Номер стільникового телефону:</label>
      <input type="text" v-model="newEmployee.officePhone" id="officePhone" required>

      <label for="mobilePhone">Номер мобільного телефону:</label>
      <input type="text" v-model="newEmployee.mobilePhone" id="mobilePhone" required>

      <button type="submit">Додати</button>
    </form>
  </div>
</template>

<script>

    export default{
      name:"AddEmployee",
        data() {
    return {
      newEmployee: {
        fullName: '',
        position: '',
        officePhone: '',
        mobilePhone: ''
      }
    };
  },
  
  methods: {
    addEmployee() {
      if (this.newEmployee.fullName && this.newEmployee.position && this.newEmployee.officePhone && this.newEmployee.mobilePhone)
       {
        this.$store.dispatch('addEmployee', { ...this.newEmployee });
        this.newEmployee.fullName = '';
        this.newEmployee.position = '';
        this.newEmployee.officePhone = '';
        this.newEmployee.mobilePhone = '';
      } 
      else 
      {
        alert('Будь ласка, введіть коректні дані');
      }
    },
    }
}
</script>
<style scoped>
.form-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

form label {
  display: block;
  margin: 10px 0 5px;
}

form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

form button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
}

form button:hover {
  background-color: #45a049;
}
</style>