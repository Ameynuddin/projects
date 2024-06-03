<template>
    <div id="app">
        <h1>Checkout Form</h1>
        <form v-if="!orderSubmitted" @submit.prevent="submitForm">
            <div class="form-group">
                <label>Name</label>
                <input type="text" id="name" v-model="formData.name" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" id="email" v-model="formData.email" required>
            </div>
            <div class="form-group">
                <label>Shipping Address</label>
                <textarea id="address" cols="30" rows="4" v-model="formData.address"></textarea>
            </div>
            <div class="form-group">
                <label>Notes/Remarks (optional)</label>
                <input type="text" id="remark" v-model="formData.remark" required>
            </div>
            <div class="form-group">
                <label>Credit Card</label>
                <input type="number" id="creditCard" v-model="formData.creditCard" required>
            </div>
            <button type="submit">Submit order</button>

        </form>
        <div class="result">
            <h2>Order Submitted</h2>
            <p>Name : {{ formData.name }}</p>
            <p>Email : {{ formData.email }}</p>
            <p>Shipping Address : {{ formData.address }}</p>
            <p>Notes/Remark : {{ formData.remark }}</p>
            <p>Credit Card : {{ formData.creditCard }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainHome',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                address: '',
                remark: '',
                creditCard: ''
            },
            orderSubmitted: false
        }
    },
    methods: {
        submitForm() {
            this.orderSubmitted = true;
            alert("Order has been placed")
        }
    }
}

</script>
<style>
#app {
    margin-top: 60px;
}

h1 {
    width: 300px;
    margin: 20px auto;
}

form {
    width: 300px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

.result{
    width: 300px;
    margin: 20px auto;
    margin-top: 40px;
}
</style>
