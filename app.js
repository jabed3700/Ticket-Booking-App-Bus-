const app = Vue.createApp({
    data(){
        return{
            
            seatStates:{
                sold:{
                    text:"SOLD",
                    color:"#ff0000"
                },
                avilable:{
                    text:"Available",
                    color:"white"
                },
                booked:{
                    text:"Booked",
                    color:'grey'
                },
                selected:{
                    text:"Selected",
                    color:'#00ff00'
                }
            },
            bgColor:'red',
        }
    },
    methods:{

    },
    computed:{

    },
    watch:{

    }
})

app.mount('#app')