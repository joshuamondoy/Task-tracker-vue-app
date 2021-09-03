<template>
    <header>
        <h1>{{ title }}</h1> <!--use the props here-->
        <Button text="Add task" color="green" />
    </header>
</template>

<script>
import Button from './Button'
export default {
    name: 'Header',
    props: { 
    title: String   //define the title props here 
    },               //props are use to pass in a value from the main entry point to a components
    components: {
        Button
    }
}                   
</script>

<style scoped> /*scoped means that the style here will only be applied to this component */
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    
</style>