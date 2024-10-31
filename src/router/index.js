import { createRouter, createWebHistory } from 'vue-router';
import AddEmployee from '@/components/AddEmployee.vue';
import DeleteEmployee from '@/components/DeleteEmployee.vue';
import FilterEmployee from '@/components/FilterEmployee.vue';

const routes = [
  {
    path: '/add',
    name: 'AddEmployee',
    component: AddEmployee,
 },
  {
    path: '/delete',
    name: 'delete',
    component: DeleteEmployee
  },
  {
    path: '/filter',
    name: 'filter',
    component: FilterEmployee
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;