const app = Vue.createApp({
    data() {
        return {
            name: 'Kamil',
            age: 26,
            imgLink: 'https://picsum.photos/id/237/200/300'

        }
    },
    methods: {
        getAdjustedAge() {
            return this.age + 5
        },
        getRandomNumber() {
            return Math.random()
        }
    }
})

app.mount("#assignment")