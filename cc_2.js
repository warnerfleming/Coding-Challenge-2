//Task 1

let x = 70
let tip = (50 <=x && x <= 300) ? (x * .15) : (x * .20)
console.log(tip)


//Task 2

let total = x + tip
console.log( `The bill was $${x}, the tip was $${tip}, and the totl value is $${total}`)

// Task 3

function calculateTip (billA,tip) {
        return (50 <= billA && billA <= 300) ? (billA * .15) : (billA * .20)
}

let billA = 100
let newbill = calculateTip (billA)
console.log(newbill)
