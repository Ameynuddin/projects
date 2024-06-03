<template>
    <div class="task1">
        <h1>Task 1</h1>
        <h2>{{ greeting }}</h2>
    </div>

    <div class="task2">
        <h1>Task 2</h1>
        <input type="text" v-model="count">
        <h2>{{ count }}</h2>
    </div>

    <div class="task3">
        <h1>Task 3</h1>
        <p v-if="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta qui dignissimos dolor dolores laboriosam, repudiandae voluptatem debitis beatae, vel adipisci magnam itaque quisquam? Eligendi repellendus distinctio excepturi id rem.</p>
        <p v-else><br><br></p> <!--Message will be hidden if the button is clicked-->
        <button v-on:click="show = !show">Toggle</button>
    </div>

    <div class="task4">
        <h1>Task 4</h1>
        <h3>i) Array of String</h3>
        <ul>
            <li v-for="item in fruits" :key="item">{{ item }}</li>
        </ul>
        <h3>ii) Array of Object</h3>
        <ul>
            <li v-for="item in newborns" :key="item">Name: {{ item.name }} and Age: {{ item.age }} </li>
        </ul>
   
    </div>
    
    <div class="task5">
        <h1>Task 5</h1>
        <h3>{{ increment }}</h3>
        <button v-on:click="getCount()">++</button>
    </div>

    <div class="task6">
        <h1>Task 6</h1>
        <label for="length">Length: </label>
        <input type="number" v-model="length">
        <label for="width">Width: </label>
        <input type="number"  v-model="width"><br><br>
        <button @click="getProduct">Compute</button>
        <h3>Result: {{ result }}</h3>   
    </div>

    <div class="task7&8">
        <h1>Task 7 & 8</h1>
        <ChildComponent name = "Alexander" :user="user" :get-data="getData"/>
    </div>
</template>

<script>
    import ChildComponent from './ChildComponent.vue' //for Task 7 & 8
    export default {
        name: 'GroupAssignment', 
        components:{
            ChildComponent
        },
        data(){
            return {
            //Task 1: Simple component
                greeting: 'Hello, Vue!',

            //Task 2: Two way binding
                count:null,

            //Task 3: Conditional Rendering
                show: true,

            //Task 4: List Rendering
                fruits: ['mango', 'lychee', 'pineapple'], //array of string 
                newborns:[      //array of object
                    {
                        name: 'Steven',
                        age: '3 weeks'
                    },
                    {
                        name: 'Adrian',
                        age: '7 weeks'
                    },
                    {
                        name: 'Sophia',
                        age: '8 weeks'
                    }
                ],

            //Task 5: Event Rendering
                increment:0,

                getCount(){
                    this.increment++;
                },

            //Task 6: Computed Properties
                result: null,
                length: null,
                width: null,
                getProduct(){
                    if(this.length !==null && this.width !==null){
                        this.result= this.length*this.width;
                    }
                },
             
            //Task 7: Passing Data to Child Component
                user: {name: 'Alex' , email: 'alex@hotmail.com'}
            }
        },
             
        methods: {
            getData(){
                alert("parent function called")
            }
            
        }

    }
    
</script>

<style>

</style>