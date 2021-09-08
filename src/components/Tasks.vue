<template>
    <div class="tasks-container">
        <!--the name of class will depends if task.reminder is true then it will be named 'reminder else leave it empty or default named'task'-->
        <div :key='singleTask.id' v-for="singleTask in allTasks">
            <Task @toggle-reminder="$emit('toggle-reminder', singleTask.id)" :singleTask="singleTask" @delete-task="$emit('delete-a-task', singleTask.id)"/> <!---emit here does the same as the emit on Task.vue--->
        </div>
    </div>
</template>

<script> 
import Task from './Task'

export default {
    name: 'Tasks',
    props: {
        allTasks: Array,
    },
    components: {
        Task
    }, 
    emits: ['delete-a-task', 'toggle-reminder'] //this is use just not to get a warning regarding the @delete-a-task emit
}
</script>

<style scoped>
    .tasks-container {
        border: 1px solid blue;
    }
</style>