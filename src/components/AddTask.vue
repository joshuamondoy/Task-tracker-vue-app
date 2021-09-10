<template>
     <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label>Task</label>
            <input type="text" v-model="text" name="text" placeholder="Add Task" />
            <!--v-model is use to bind the values from export to this inputs-->
        </div>
        <div class="form-control">
            <label>Day & Time</label>
            <input
                type="text"
                v-model="day"
                name="day"
                placeholder="Add Day & Time"/>
        </div>
            <div class="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder" />
        </div>

        <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
    name: 'AddTask', 
    data() {
        return{
            //default value for the data to be export
            text: '',
            day: '',
            reminder: false
        }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault() //preventDefault() is often called when handling events to prevent the browsers default behavior. since we just want to display it on the webpage we can use @submit.prevent="methodHere"
        if(!this.text) {
          alert('Please add a task')
        }
        const newTask = {
          id: Math.floor(Math.random() * 100000),
          text: this.text,
          day: this.day,
          reminder: this.reminder
        }
        this.$emit('add-task', newTask) //emit the new data object to App.vue

        this.text = ''
        this.day = ''
        this.reminder = false
      }
    }
}
</script>

<style scoped>
.btn {
    background: black;
}
.add-form {
    border: 1px solid aqua;
    padding: .6rem;
    text-align: left;
}
dd-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>