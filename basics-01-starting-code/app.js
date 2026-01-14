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
                return '<h1>Master Vue!</h1>'
            } 
            else {
                return '<h1>Deep dive into Vue!</h1>'
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