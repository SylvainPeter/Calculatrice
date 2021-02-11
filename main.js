    const app = new Vue({
        el: '#app',
        data: {
            firstNumber: 0,
            secondNumber: 0,
            operatorName: '+'
        },
        computed: {
            totalAddition() {
                return this.firstNumber + this.secondNumber
            },
            totalSubstraction() {
                return this.firstNumber - this.secondNumber
            },
            totalMultiplication() {
                return this.firstNumber * this.secondNumber
            },
            totalDivision() {
                return this.firstNumber / this.secondNumber
            }
        }
    })