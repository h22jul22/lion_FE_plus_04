Vue.createApp({
    data() {
        return {
            x: 0,
            y: 0,
            result: 0,
        };
    },
    methods: {
        submitHandler() {
            this.result = this.x + this.y;
        },
    },
}).mount('#calc-app');
