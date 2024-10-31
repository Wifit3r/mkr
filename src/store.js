import { createStore} from "vuex";


const store = createStore({
    state () {
      return {
        employees: [{ id: 1, fullName: 'Іванов Іван Іванович', position: 'Менеджер', officePhone: '123-456-7890', mobilePhone: '098-765-4321' },
            { id: 2, fullName: 'Петров Петро Петрович', position: 'Інженер', officePhone: '123-456-7891', mobilePhone: '098-765-4322' }]
      }
    },
    mutations: {
        ADD_EMPLOYEE(state, employee) {
          state.employees.push(employee);
        },
        DELETE_EMPLOYEE(state, name) {
          for(let i =0; i<state.employees.length; i++){
            if(state.employees[i].fullName.includes(name)){
                state.employees.splice(i, 1)
            }
          }
        },
        FILTER_EMPLOYEE(state, value){
            for(let i =0; i<state.employees.length; i++){
                if(!(state.employees[i].fullName.includes(value))&&(!(state.employees[i].mobilePhone.includes(value)))&&(!(state.employees[i].officePhone.includes(value)))&& (!(state.employees[i].position.includes(value)))){
                    state.employees.splice(i, 1)
                }
              }
        }
      },
      actions: {
        addEmployee({ commit }, employee) {
          commit('ADD_EMPLOYEE', employee);
        },
        deleteEmployee({ commit }, name) {
          commit('DELETE_EMPLOYEE', name);
        },
        FilterEmployee({commit}, value){
            commit('FILTER_EMPLOYEE', value)
        },
      },
      getters: {
        allEmployees: state => state.employees
      }
    
  })

export default store;