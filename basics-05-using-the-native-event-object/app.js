const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: { //use it as data property,, not like function
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Purgat";
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = ''
    }
  }
});

app.mount('#events');
