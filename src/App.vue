<!--Remember that App.vue itself is a component so same things here applies for other components-->
--templates are being embed here--
<template>
<h1>Each component is divided by borders</h1>
  <div class="container">
    <Header title="Task Tracker"/> <!--pass the value of title here are passed through props that will be used in the Header components--->
    <Tasks :allTasks="tasks" @delete-a-task="deleteTask"/> <!--this component can be reuse-->
    
  </div>
</template>

--js components are imported and defined here--
<script>
//import components here
import Header from './components/Header'
import Tasks from './components/Tasks'

export default {
  name: 'App',
  components: {
   //register imported components and define props here
    Header,
    Tasks
  },
  data() {
    return {
      tasks: [], //declared tasks as empty array before it is created
    }
    
  },
  methods: {
    deleteTask(id) {
      console.log('task', id)
    }
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
