<template>
    <div id="app">
        <h1>Todo List</h1>
        <input type="text" placeholder="Add a new todo" v-model="newTodo">
        <button @click="addTodo">Add Task</button>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{ todo }}
                <button @click="removeTodo(index)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'MainHome',
    setup() {
        const newTodo = ref('');
        const todos = ref([]);

        // add-to-do function
        const addTodo = () => {
            if (newTodo.value.trim() !== '') { // remove empty space
                todos.value.push(newTodo.value.trim());
                newTodo.value = '';
            }
        };

        // remove-to-do function
        const removeTodo = (index) => {
            todos.value.splice(index, 1);
        };
        return {
            newTodo,
            todos,
            addTodo,
            removeTodo,
        };
    },
}
</script>

<style scoped>
#app{
    text-align: center;
    margin-top: 60px;
}
input, button{
    padding: 10px;
    font-size: 15px;
}
ul{
    list-style-type: none;
    padding: 0;
}
li{
    margin: 5px 0;
    /* 5px for top & bottom, the latter for left&right */
}
</style>

