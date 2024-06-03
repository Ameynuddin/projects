<template>
    <h1>Bookstore</h1>
    <ul class="item" v-for="item in list" :key="item.id">
        <li>{{ item.id }}</li>
        <li>{{ item.name }}</li>
        <li>{{ item.price }}</li>
        <li>{{ item.category }}</li>
        <li><img :src="item.image"></li>
    </ul>

</template>

<script>
    import axios from 'axios'
    export default {
        name: 'TaskOne',
        data(){
            return{
                list: []
            }
        },
        async mounted(){
            let result = await axios.get("https://my-json-server.typicode.com/guilhermekuni/fake-products-api/products")
            console.warn("api data", result.data)
            this.list = result.data
        }
    }
</script>

<style scoped>
        .item {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .item li {
        display: inline-block;
        width: 200px;
        height: 80px;
        padding: 10px;
        border: 1px solid #ddd;
        text-align: center;
        vertical-align: top; /* Align content to the top */
    }

    .item img {
        max-width: 50%;
        height: auto;
        margin-top: 10px;
    }
</style>