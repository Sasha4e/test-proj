<template>
       <div style="display:flex;justify-content: center; flex-direction: column; align-items: center;background-color: burlywood">
          <div class="home">
            <img alt="Vue logo" src="../assets/logo.png">
            <h2>{{taskStore.name}}</h2>
          </div>

<!--           form-->
            <TaskForm />
<!--           filter-->

            <nav class="filter">
                <button @click="filter = 'all'">All tasks</button>
                <button @click="filter = 'favs'">Fav tasks</button>
            </nav>
<!---->
           <div class="task-list" v-if="filter === 'all'">
               <p>all tasks {{taskStore.totalCount}}</p>
               <div class="task-list-container" v-for="item in taskStore.tasks" :key="item.id">
                   <div class="item">
                       <p>{{item.title}} <span v-if="item.isFav">*</span></p>
                       <div class="item-buttons">
                           <button @click="taskStore.deleteTask(item.id)">delete</button>
                           <button @click="taskStore.toggleFav(item.id)">favorite </button>
                       </div>
                   </div>
               </div>
           </div>


           <div class="task-list" v-if="filter === 'favs'">
               <p>favs {{taskStore.favCount}} </p>
               <div class="task-list-container" v-for="item in taskStore.favs" :key="item.id">
                   <div class="item">
                       <p>{{item.title}}</p>
                       <div class="item-buttons">
                           <button>delete</button>
                           <button>favorite</button>
                       </div>
                   </div>
               </div>
           </div>
           <button @click="taskStore.reset">reset</button>
       </div>
</template>

<script setup>
/* eslint-disable */
import { useTaskStore} from "@/stores/TaskStore";
import {onMounted, ref} from "vue";
import TaskForm from "@/components/TaskForm.vue";
import {storeToRefs} from "pinia";

const taskStore = useTaskStore()
// const {tasks, favs, totalCount, favCount} = storeToRefs(taskStore)
const filter = ref('all')

onMounted(() => {
    taskStore.getTask()
})

</script>
<style scoped lang="scss">
.task-list {
    display: flex;
    width: 100%;
    max-width: 900px;
    align-items: center;
    justify-content: center;
    &-container {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
}
.item {
    width: 100%;
    max-width: 300px;
    background-color: white;
    border: 1px solid brown;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    margin: 20px;
    &-buttons {
        display: flex;
    }
}
</style>