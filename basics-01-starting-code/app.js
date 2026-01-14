const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org/',
            firstVariable: 'First variable',
            secondVariable: 'Second variable',
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return 'Master Vue!'
            } 
            else {
                return 'Deep dive into Vue!'
            }
        },
        variableFunction() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.firstVariable;
            } 
            else {
                return this.secondVariable;
            }            
        }
    }
})

app.mount('#user-goal')