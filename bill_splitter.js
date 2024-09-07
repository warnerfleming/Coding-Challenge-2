//Task 1

let x = 70
let tip = (50 <=x && x <= 300) ? (x * .15) : (x * .20)
console.log(tip)


//Task 2

let total = x + tip
console.log( `The bill was $${x}, the tip was $${tip}, and the totl value is $${total}`)

// Task 3

function calculateTip (bills,tip) {
        return (50 <= bills && bills <= 300) ? (bills * .15) : (bills * .20)
}

 let bills = 100
let newbill = calculateTip (bills)
console.log(newbill)


// Task 4
bills =[275,40,430]
const tips = bills.map(bills => calculateTip(bills)) 
console.log("Correspinding tips for bills of $275, $40, and $430 :", tips) 

let totals = bills.map(bills => calculateTip(bills) + bills)
console.log(`The totals of each bill with tips are ${totals}`)
