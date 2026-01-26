const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add(value){
            this.counter = this.counter + value;
        }
    },
    watch:{
        counter(value){
            if(value > 37){
                const that = this
                setTimeout(function() {
                    that.counter = 0;
                }, 3000);
            }
        }
    },
    computed: {
        result(){
            if(this.counter < 37){
                return 'Not there yet...'
            }
            else if(this.counter > 37) {
                return "Too much!"
            }
            else {
                return this.counter
            }
        }

    }
})

app.mount("#assignment");