<template>
    <tr>
      <td>{{ employee.fullName }}</td>
      <td>{{ employee.position }}</td>
      <td>{{ employee.officePhone }}</td>
      <td>{{ employee.mobilePhone }}</td>
    </tr>
  </template>
  
  <script>
  export default {
    name: "EmployeeItem",
    props: {
      employee: {
        type: Object,
        required: true
      }
    }
  };
  </script>