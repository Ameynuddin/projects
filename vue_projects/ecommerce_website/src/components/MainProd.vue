<template>
    <div class="tableProd">
        <h1>Our Products</h1>
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody class="product">
                <tr class="item" v-for="item in list" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.category }}</td>
                    <td><img :src="item.image"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'MainProduct',
    data() {
        return {
            list: []
        }
    },
    async mounted() {
        let result = await axios.get("https://my-json-server.typicode.com/guilhermekuni/fake-products-api/products")
        console.warn("api data", result.data)
        this.list = result.data
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 20px;
}

table {
    padding: 20px;
    font-family: Arial, sans-serif;
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
}

thead {
    background-color: rgb(201, 196, 196);
}

th {
    font-weight: bold;
}

th,
td {
    padding: 15px;
    text-align: left;
    border: 1px solid rgb(149, 144, 144);
}

.item:hover{
    background-color: #c1e398;
}

img {
    max-width: 100px;
    height: auto;
}

@media screen and (max-width: 768px) {
    h1 {
        font-size: 18px;
    }

    th,
    td {
        padding: 10px;
        font-size: 10px;
    }

    img {
        max-width: 60px;
    }
}

@media screen and (max-width: 480px) {
    h1 {
        font-size: 10px;
    }

    th,
    td {
        padding: 8px;
        font-size: 8px;
    }

    img {
        max-width: 60px;
    }
}

.tableProd {
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>