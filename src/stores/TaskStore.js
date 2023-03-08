import { defineStore } from "pinia";
import axios from "axios";
import {computed, ref} from "vue";


export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([
        {id: 1, title: 'bye milk', isFav: false},
        {id: 2, title: 'play stalker', isFav: true},
        {id: 3, title: 'study', isFav: true},
  ])
  const name = ref('Yoshi')


  const favs = computed(() => tasks.value.filter(t => t.isFav))
  const favCount = computed(() => tasks.value.reduce((p, c) => {
          return c.isFav ? p + 1 : p
        }, 0))
  const totalCount =computed( () => {
        return tasks.value.length
      })

  const getTask = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
          console.log(response)
        })
  }

  const addTask = (task) => {
    tasks.value.push(task)
  }

  const deleteTask = (id) => {
      tasks.value = tasks.value.filter(t => {
        return t.id !== id
      })
  }

  const toggleFav = (id) => {
      const task = tasks.value.find(t => t.id === id)
    task.isFav = !task.isFav
  }

  return {tasks, name, favs, favCount, totalCount, getTask, addTask, deleteTask, toggleFav}
})

// export const useTaskStore = defineStore('taskStore', {
  // state: () => ({
  //   tasks: [
  //     {id: 1, title: 'bye milk', isFav: false},
  //     {id: 2, title: 'play stalker', isFav: true},
  //     {id: 3, title: 'study', isFav: true},
  //   ],
  //   name: 'Yoshi'
  // }),
  //
  // getters: {
  //   favs() {
  //     return this.tasks.filter(t => t.isFav)
  //   },
  //
  //   favCount() {
  //     return this.tasks.reduce((p, c) => {
  //       return c.isFav ? p + 1 : p
  //     }, 0)
  //   },
  //
  //   totalCount: (state) => {
  //     return state.tasks.length
  //   }
  // },
  //
  // actions: {
  //
  //   getTask() {
  //     axios.get('https://jsonplaceholder.typicode.com/todos')
  //         .then((response) => {
  //       console.log(response)
  //     })
  //
  //   },
  //
  //   addTask(task) {
  //     this.tasks.push(task)
  //   },
  //
  //   deleteTask(id) {
  //       this.tasks = this.tasks.filter(t => {
  //         return t.id !== id
  //       })
  //   },
  //
  //   toggleFav(id) {
  //       const task = this.tasks.find(t => t.id === id)
  //     task.isFav = !task.isFav
  //   },
  //
  // }
// })