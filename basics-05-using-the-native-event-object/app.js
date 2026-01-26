const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullName2: '',
    };
  },
  watch: {  //can only watch 1 dependency
    name(value) { //automatically gets value of data property, can also get previous value
      this.fullName2 = value + " Purgat"
    },
    counter(value) {
      if(value > 50) {
        this.counter = 0;
      }
    }
  },
  computed: { //use it as data property,, not like function. Can "watch" as many dependencied as is used in it
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + this.lastName;
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
