let cash = 40
let price = 50
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra - here's ${difference} your change`)
}
else if (cash === price) {
    console.log("you paid the exact amount, have a nice day")
}

else {
    console.log(`you don't have enough cash - you still owe ${-difference} dollars`)   

}
