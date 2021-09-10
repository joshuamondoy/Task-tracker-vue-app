<!--Remember that App.vue itself is a component so same things here applies for other components-->
--templates are being embed here--
<template>
<h1>Each component is divided by borders</h1>
  <div class="container">
    <Header title="Task Tracker"/> <!--pass the value of title here are passed through props that will be used in the Header components--->
    <AddTask @add-task="addTask" />
    <Tasks :allTasks="tasks" @delete-a-task="deleteTask" @toggle-reminder="toggleReminder" /> <!--this component can be reuse-->
    
    
  </div>
</template>

--js components are imported and defined here--
<script>
//import components here
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

export default {
  name: 'App',
  components: {
   //register imported components and define props here
    Header,
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: [], //declared tasks as empty array before it is created
    }
    
  },
  emits: ['toggle-reminder', 'delete-a-task',], //just for the warning on using emit
  methods: {
    addTask(newTask) {
      this.tasks = [...this.tasks, newTask]
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
      //what happened here is we reset the value of tasks exept the task that has the id being selected, basically remove all the value of the tasks array then bring back all except single task with the id that's being selected upon click
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task)
      //what happened here is basically we just update the value of tasks array by using .map, upon double click all the value of the tasks array will be replace with the same value except that the task with the id being selected the value of the reminder will be the opposite of the old value, so if true it will be false and vice versa
    },
    
  }, 
  created() {
    this.tasks = [ //dummy data for the tasks array
      {
        id: 1, 
        text: 'Doctors Appointment',
        day: 'March  1st at 2:30pm',
        reminder: true,
      },
      {
        id: 2, 
        text: 'Meeting at School',
        day: 'March  3rd at 1:30pm',
        reminder: true,
      },
      {
        id: 3, 
        text: 'Food Shopping',
        day: 'March  3rd at 11:30am',
        reminder: false,
      },
    ]
  }
}
</script>

--css are declared here--
<style> /*this is a global style, means all style here applies in every components */
/*style can also be create by components (separate files) or by global and put it all here */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin: 1rem;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: green;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn:hover{
  background: rgb(0, 155, 0);
  transition-duration: 0.4s;
}
.btn-block {
  display: block;
  width: 100%;

}
@media (max-width: 500px) {
  .container{
    max-width: 400px;
  }
}
</style>
