// let cash = 40
// let price = 50
// let difference = cash - price

// if (cash > price) {
//     console.log(`you paid extra - here's ${difference} your change`)
// }
// else if (cash === price) {
//     console.log("you paid the exact amount, have a nice day")
// }

// else {
//     console.log(`you don't have enough cash - you still owe ${-difference} dollars`)

// }

// let val = ''
// if (val){
//     console.log(!!val)
// }

// else {
//     console.log(!!val)
// }

// let hot = false
// hot? console.log('its hot outside') : console.log('its cold outside')

// let subscribed = true
// let loggedIn = true
// // let str = subscribed && loggedIn ? console.log('show video') : console.log('hide video')

// let cash = 50
// let price = 40
// let IsStoreOpen = false
// let str = cash>=price || IsStoreOpen ? "give reciept" : "do not give reciept"
// console.log(str)

// let obese = false
// let healthy = true
// let str2 = obese>=healthy? 'eat less' : 'good job!!'
// console.log(str2)

// let count = 1
//  while(count <= 100){
//   console.log(count)
//     count = count + 1
//  }

// for(let i = 1; i <= 20; i = ++i){
//     if(i%5 === 0 && i%3 === 0){
//     console.log(`${i} -> frontend simplified`)
//     }
//      else if(i%3 === 0){
// console.log(`${i} -> frontend`)
//     }
//    else if(i%5 === 0){
// console.log(`${i} -> simplified`)
//     }
//      else{
// console.log(`${i} -> ${i}`)
//     }

// }
// const str = 'Nathan T Murphy'

// for(let i = 0; i < str.length; i++){
//     console.log(str[i])
// }

// Function definition
// function welcomeToFES(firstName, MiddleInitial, lastName) {
//   console.log(`welcome to FES, ${firstName} ${MiddleInitial} ${lastName}`);
// }
// call the function
// welcomeToFES('nathan', 'T', 'murph')
// welcomeToFES('tyrone', 'J', 'power')
// welcomeToFES('murphy', 'E', `lee`)

// function fn (){
//     return
// console.log('this is a function')
// }

// fn()

// function SumOfTwoNumbers(num1, num2){
//     return num1 + num2
// }

// console.log(SumOfTwoNumbers(10, 20))  // a = argument

// function convertCelsiusToFahrenheit(celsius){
//     return (celsius * 1.8) + 32
// }

// const convertCelsiusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32
// }
// console.log(convertCelsiusToFahrenheit(30))

// let item1 = 20
// let item2 = 30
// let item3 = 40
// let item4 = 50
// let item5 = 100

// let arr= [20,30,40,50,100]

// //first element of array
// console.log(arr[0])

// //last element of array
// console.log(arr[arr.length - 1])

// //add element to end of array
// arr.push(200)

// console.log(arr)

//  20, 30, 40, ||
//  let newArr = arr.filter( element => element < 50)

// console.log(newArr)

// let grade1 = 'A+'
// let grade2 = 'A'
// let grade3 = 'B'
// let grade4 = 'FAIL'

let grades = ["A+", "A", "FAIL"];

// let arr= ['A+', 'A',  'FAIL']
// let gradeArr = arr.filter( (element) => element !== 'FAIL' )

// console.log(gradeArr)
// let goodGrades = []

// for ( let i=0; i < grades.length; i++){

// if(grades[i] !== 'FAIL'){
//     goodGrades.push(grades[i])
// }
// }

// console.log(goodGrades)

// let arr = [1,4,9,16]

//  let newArr = arr.map(element => element *2)

// console.log(newArr)

let dollars = [1, 3, 5, 10];

// let numArr = dollars.map (num => num * 100)
// console.log(numArr)

// let centDollars = []

// for ( let i=0; i <dollars.length; i++){

// centDollars.push(dollars[i] * 100)
// }

// console.log(centDollars)

// let userFirstName = 'Nathan'
// let userLastName = 'Murphy'
// let userDiscordID = 'nathanmurphy#1234'
// let userSubscriptionStatus = 'VIP'

// let users = [
//   {
//     username: "nathan",
//     LastName: "murphy",
//     password: "abc123",
//     discord: "nathanmurphy#1234",
//     subscriptionStatus: "VIP",
//     email: "123abc@abc123.com",
//     lessonsCompleted: [0, 1],
//   },
//   {
//     username: "nate",
//     LastName: "murph",
//     discord: "nathanmur#1234",
//     password: "456abc",
//     subscriptionStatus: "VIP",
//     email: "456abc@abc123.com",
//     lessonsCompleted: [0, 1],
//   },
// ];

// function login(email, password) {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].email === email) {
//       console.log(users[i]);
//       if(users[i].password === password){
//         console.log("login successful");
//       }
//       else{
//         console.log("incorrect password- try again");
//       }
//       return
//     }
//   }
//   console.log("email not found - please try again");
// }

// login("45abc@abc123.com", "456abc");

// function registerNewUser(user) {
//   users.push(user);
// }

// let users = [];

// registerNewUser({
//   username: "nmurphy",
//   email: "nmurphy@123.com",
//   password: "123abc",
//   subscriptionStatus: "VIP",
//   discordID: "nmurphy#1234",
//   lessonsCompleted: [0, 1]
// });

// console.log(users);


// First way to access an element




// Second way to access an element
// console.log(document.getElementById('title'))

// document.querySelector('#title').innerHTML += 'IS THE BEST'

// document.querySelector('#title').style.color = '#beb315ff'


function toggleDark(){
   document.querySelector('body').classList.toggle('dark-theme')
    
}