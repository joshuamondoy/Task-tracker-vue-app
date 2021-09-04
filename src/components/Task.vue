<template>
    <div class="task"  :class="[aTask.reminder ? 'reminder' : '']">
        <h3>
            {{aTask.text}}
            <i @click="onDelete(aTask.id)" class="fas fa-times"></i>
        </h3>
        <p>{{aTask.day}}</p>
    </div>
</template>
<script>
export default {
    name: "Task",
    props: {
        aTask: String
    },
    methods: {
        onDelete(id) {
            console.log(id)
        }
    }
}
</script>

<style scoped>
    .task {
        background: rgb(235, 235, 235);
        margin-bottom: 3px;
        padding-left: 1rem;
        text-align: left;
        border: 1px solid gold;
    }
    .task:hover{
        background: rgb(204, 204, 204);
        transition-duration: 0.4s;
    }
    .tasks-container {
        border: 1px solid green;
        text-align: left;
    }
    .reminder{
        border-left: 5px solid green;
    }
    h3 {
        display: flex;
        justify-content: space-between;
        padding-bottom: 0;
    }
    .fas {
        margin: .5rem;
        color: red;
        cursor: pointer;
    }
    
</style>;