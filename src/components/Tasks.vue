<template>
    <div class="tasks-container">
        <!--the name of class will depends if task.reminder is true then it will be named 'reminder else leave it empty or default named'task'-->
        <div :key='task.id' v-for="task in theTasks">
         <Task :aTask="task" />
        </div>
    </div>
</template>

<script> 
import Task from './Task'

export default {
    name: 'Tasks',
    props: {
        theTasks: Array,
    },
    components: {
        Task
    }
}
</script>

<style scoped>
    .tasks-container {
        border: 1px solid blue;
    }
</style>