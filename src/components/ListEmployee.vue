<template>
  <div class="container">
    <h2>Список співробітників</h2>
    <table class="employees-table">
      <thead>
        <tr>
          <th>Прізвище Ім’я По-батькові</th>
          <th>Посада</th>
          <th>Номер стільникового телефону</th>
          <th>Номер мобільного телефону</th>
        </tr>
      </thead>
      <tbody>
        <EmployeeItem v-for="employee in employeesGet" :key="employee.id" :employee="employee" />
      </tbody>
    </table>
  </div>
</template>

<script>

import EmployeeItem from './EmployeeItem.vue';

export default {
  name:"ListEmployees",
  components:{
    EmployeeItem,
  },
  computed: {
    employeesGet() {
      return this.$store.getters.allEmployees;
    }
  },
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
    deleteEmployee() {
      this.$store.dispatch('deleteEmployee', this.nameDelete);
      this.nameDelete = '';
    },
  }
}
</script>


<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

.employees-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.employees-table th,
.employees-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.employees-table th {
  background-color: #209f33;
  color: white;
  text-align: left;
}

.employees-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.employees-table tr:hover {
  background-color: #ddd;
}

form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

form label {
  margin: 5px 0;
}

form input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

form button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #0056b3;
}
</style>

