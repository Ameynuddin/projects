<template>
    <div>
        <h1>{{ name }}</h1>
        <h2>{{ user.email }}</h2>

        <!-- Task 8: Emitted Events -->
        <button @click="getData">Call Function</button>
   
    </div>
</template>

<script>
    export default {
        name: 'ChildComponent',
        props: {
            name: String,
            user: Object,
            getData: Function
        }
    }
</script>