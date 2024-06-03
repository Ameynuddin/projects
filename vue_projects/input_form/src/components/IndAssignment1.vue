<template>
    <h1>Feedback Form</h1> 
    <input type="email" placeholder="Enter your email.." v-model="email">
    <br><br>
    <input type="text" placeholder="Enter your Employee ID.." v-model="ID">
    <br><br>
    <input type="text" placeholder="Enter your message.." v-model="message">
    <br><br>
    
    <button v-on:click="getData()" type="button">Submit</button>

    <br><br>
    <table v-if="show">
        <tr>
            <th>Email</th>
            <th>Employee ID</th>
            <th>Message</th>
        </tr>
        <tr>
            <td>{{ email }}</td>
            <td>{{ ID }}</td>
            <td>{{ message }}</td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: 'IndAssignment1',
        data() {     
            return {
                email: null,
                ID: null,
                message: null,
                show: false 
            }
        },
        
        methods: {
            getData() {
                if (this.email !== null && this.ID !== null && this.message !== null) {
                    this.show = true; 
                }
            }
        }

    }
</script>

<style>
th, td{
    border: 2px solid black;
    padding: 7px;
}
table{
    border-collapse: collapse;
    font-size: 15px;
}
input[model="message"]{
    height:70px;
}
input::placeholder{
    text-align: top;
}
</style>