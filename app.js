const app = Vue.createApp({
    data() {
        return {
            appliedCoupon: null,
            couponCode: "",
            coupons: [{
                    code: "100TAKAOFF",
                    discount: 100
                },
                {
                    code: "200TAKAOFF",
                    discount: 200
                }
            ],
            seatStates: {
                sold: {
                    text: "SOLD",
                    color: "#ff0000"
                },
                avilable: {
                    text: "Available",
                    color: "white"
                },
                booked: {
                    text: "Booked",
                    color: 'grey'
                },
                selected: {
                    text: "Selected",
                    color: '#00ff00'
                }
            },
            seats: [{
                    name: "A1",
                    type: "available",
                    price: 500
                },
                {
                    name: "A2",
                    type: "available",
                    price: 500
                },
                {
                    name: "A3",
                    type: "available",
                    price: 500
                },
                {
                    name: "A4",
                    type: "available",
                    price: 500
                },
                {
                    name: "B1",
                    type: "available",
                    price: 450
                },
                {
                    name: "B2",
                    type: "available",
                    price: 450
                },
                {
                    name: "B3",
                    type: "available",
                    price: 450
                },
                {
                    name: "B4",
                    type: "available",
                    price: 450
                },
                {
                    name: "C1",
                    type: "sold",
                    price: 500
                },
                {
                    name: "C2",
                    type: "sold",
                    price: 500
                },
                {
                    name: "C3",
                    type: "sold",
                    price: 500
                },
                {
                    name: "C4",
                    type: "sold",
                    price: 500
                },
                {
                    name: "D1",
                    type: "available",
                    price: 400
                },
                {
                    name: "D2",
                    type: "available",
                    price: 400
                },
                {
                    name: "D3",
                    type: "available",
                    price: 400
                },
                {
                    name: "D4",
                    type: "available",
                    price: 400
                },
                {
                    name: "E1",
                    type: "available",
                    price: 300
                },
                {
                    name: "E2",
                    type: "available",
                    price: 300
                },
                {
                    name: "E3",
                    type: "booked",
                    price: 300
                },
                {
                    name: "E4",
                    type: "booked",
                    price: 300
                },
                {
                    name: "F1",
                    type: "available",
                    price: 300
                },
                {
                    name: "F2",
                    type: "available",
                    price: 300
                },
                {
                    name: "F3",
                    type: "available",
                    price: 300
                },
                {
                    name: "F4",
                    type: "available",
                    price: 300
                }
            ]

        }
    },
    computed: {
        selectedSeat() {
            let seatCount = this.seats.filter((value) => value.type === "selected");
            // console.log(seatCount);
            return seatCount;

        },
        totalCost() {
            let tc = 0;
            this.selectedSeat.filter((value) => tc += value.price);
            
            if(this.appliedCoupon !== null){
              tc = tc-this.appliedCoupon.discount;
            }
            return tc;
        }


    },
    methods: {
        selectSeat(id) {
            let seatInfo = this.seats[id];
            if (seatInfo.type === "booked" || seatInfo.type === "sold") {
                alert('Your can not select this seat')
                return;
            }
            console.log(this.selectedSeat.length);
            if (seatInfo.type === "available" && this.selectedSeat.length === 3) {
                console.log("sabura");
                console.log(this.selectedSeat);
                alert('Your can not select more than 3 seat')
                return;

            }

            // console.log(seatInfo.type);
            seatInfo.type = seatInfo.type === "available" ? "selected" : "available";
            // console.log(seatInfo.type);


        }
    },

    watch: {
        couponCode(newValue) {
            console.log(newValue);
            if (newValue.length === 10) {
                let searchCoupon = this.coupons.filter((value) =>
                    value.code === newValue)
                console.log(searchCoupon);
                // return searchCoupon;
                if (searchCoupon.length === 1) {
                    this.appliedCoupon = searchCoupon[0];
                    this.couponCode=""
                } else {
                    alert("Your code is invalid")
                }
            };

        }

    }
})

app.mount('#app')