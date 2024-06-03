<template>
  <div>
    <!-- To display time and the greeting according to the current time -->
    <p>Current time: {{ currentTime }}</p>
    <p style="font-weight: bold; font-size:larger;">{{ greeting }}</p>
  </div>
</template>

<script>
export default {
  name: 'IndAssignment2',
  data() {
    return {
      // initialize current time and greeting as empty strings
      currentTime: '',
      greeting: ''
    };
  },
  mounted() {
    // update the greeting upon mounting the component
    this.updateGreeting();
    setInterval(this.updateGreeting, 60000); // to update every minute (60000 ms)
  },
  methods: {
    updateGreeting() {
      // get current date & time
      const now = new Date();
      // get hour from current date & time for conditional testing
      const hour = now.getHours();

      // get time and seconds to display the current time
      // by converting minutes & seconds to string as padStart method is used, which is to ensure the minutes & seconds are always displayed in 2 digits, specifically no. 0 to 9
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');

      // set data property for the current time
      this.currentTime = `${hour}:${minutes}:${seconds}`

      // set the greeting based on the hour using if-else condition
      if (hour >= 6 && hour < 12) {
        this.greeting = 'Good morning!';
      } else if (hour >= 12 && hour < 18) {
        this.greeting = 'Good afternoon!';
      } else if (hour >= 18 && hour < 24) {
        this.greeting = 'Good evening!';
      } else {
        this.greeting = 'Good night!';
      }
    }
  }
};
</script>