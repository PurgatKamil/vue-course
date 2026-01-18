const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            valueToConfirm: '',
            confirmedValue: '',
        }
    },
    methods: {
        showAlert() {
            alert("Button pressed!");
        },
        setOutput1(event) {
            this.userInput = event.target.value;
        },
        setToConfirm(event) {
            this.valueToConfirm = event.target.value;
        },
        confirmValue() {
            this.confirmedValue = this.valueToConfirm;
        }
    }
})

app.mount("#assignment");