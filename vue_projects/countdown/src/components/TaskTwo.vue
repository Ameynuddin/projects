<template>
    <div>
        <h1>Countdown timer</h1>
        <label for="inputHours">Input Hours: </label>
        <input type="number" placeholder="Enter hours" v-model="inputHours"><br>
        <label for="inputMinutes">Input Minutes: </label>
        <input type="number" placeholder="Enter minutes" v-model="inputMinutes"><br>
        <button @click="startCountdown">Start countdown</button>
        <button @click="stopCountdown">Stop countdown</button>
        <button @click="resetCountdown">Reset countdown</button>
        <h2>{{ formattedTime }}</h2>
    </div>
</template>

<script>
export default {
    name: 'MainHome',
    data() {
        return {
            inputHours: 0,
            inputMinutes: 0,
            remainingSeconds: 0,
            timerId: null,
        }
    },
    computed: {
        formattedTime() {
            // added hours
            let hours = Math.floor(this.remainingSeconds / 3600).toString().padStart(2, '0')
            let minutes = Math.floor((this.remainingSeconds % 3600) / 60).toString().padStart(2, '0')
            let seconds = (this.remainingSeconds % 60).toString().padStart(2, '0')
            return `${hours}:${minutes}:${seconds}`;
        }
    },
    methods: {
        startCountdown() {
            this.stopCountdown();
            this.remainingSeconds = this.inputHours * 3600 + this.inputMinutes * 60;
            this.timerId = setInterval(() => {
                if (this.remainingSeconds > 0) {
                    this.remainingSeconds -= 1; // decrement of seconds
                } else {
                    this.stopCountdown();
                    alert('Time,s up')
                }
            }, 1000)
        },
        stopCountdown() {
            if (this.timerId) {
                clearInterval(this.timerId);
                this.timerId = null

            }
        },

        resetCountdown() {
            this.stopCountdown();
            this.inputHours = 0;
            this.inputMinutes = 0;
            this.remainingSeconds = 0;
        },
    },
    beforeUnmount() {
        this.stopCountdown();
    }
}


</script>
