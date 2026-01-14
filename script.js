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

// function toggleDark(){
//    document.querySelector('body').classList.toggle('dark-theme')

// }

//

const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");
// console.log(emailRef);

// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//       emailRef.innerHTML = data.address.city;
//     });

// async function main() {
//     console.log(1)
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   console.log(2)
//   const data = await response.json();
//   console.log(3);
//   emailRef.innerHTML = data.email
// }

// main();

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("undefined");
    }, 2000);
  });
}

// getSubscriptionStatus().then(response => console.log(response))

// async function main(){

//     console.log (await getSubscriptionStatus())
// }

// main()

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video");
    } else if (subscriptionStatus === "FREE") {
      resolve("show trailer");
    } else reject("no video");
  });
}

async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  try {
    console.log(await getVideo(status));
  } catch (e) {
    console.log(e);
    videoRef.innerHTML = e;
  }
}

// function add(num1 , num2){
//   return    num1 + num2

// }

// console.log(add(5,2))

// function secondsIntoHours(hour){
//    return  hour  * 60 * 60

// }

// console.log(secondsIntoHours(10))

// function calcPerimeter(length , width){
//   return 2 *(length + width)
// }

// console.log(calcPerimeter(2,9))

// function calcTriangleArea(base,height){
//   return  1 / 2 * base * height
// }

// console.log(calcTriangleArea(20,20))

// function appendFrontend(string){
//   return string + "Frontend"

// }

// console.log(appendFrontend('Apple'))

// function sumGreaterThan100(num1,num2){

// return num1 + num2 > 100

// }

// console.log(sumGreaterThan100(100,-50))

// function oppositeBoolean(boolean){

// return !boolean

// }

// console.log(oppositeBoolean(true))

// function isNotZero(num){

// return num !== 0

// }

// console.log(isNotZero(0))

// function calcRemainder(num1,num2){

// return num1 % num2

// }

// console.log(calcRemainder(9,8))

function isOdd(num) {
  return num % 2 !== 0;
}

// console.log(isOdd(3))

// function isOdd(num){

// if (num % 2 === 0){
//   return false
// }

// return true
// }

// console.log(isOdd(3))
// function booleaninteger(num){

// if (num % 2 === 0){
//   return 1
// }

// return -1
// }

// console.log(booleaninteger(5))

// function booleaninteger (num){
//   return num % 2 === 0 ? 1 : -1
// }

// console.log(booleaninteger(2))

// function isLoggedInAndSubscribed(loggedIn,subscribed){
//   return loggedIn === 'loggedIn' && subscribed === 'subscribed'

// }

// console.log(isLoggedInAndSubscribed('loggedIn','subscribed'))

// function isLoggedInAndSubscribed(loggedIn,subscribed){
//   return loggedIn === 'loggedIn' || subscribed === 'subscribed'

// }

// console.log(isLoggedInAndSubscribed('loggedout','subscribed'))
// function filterOutFalsy(ele1,ele2){
// return !ele1 ? ele1 : ele2

// }

// console.log(filterOutFalsy(0,500))

// function arrLength(arr){
// return arr.length

// }

// console.log(arrLength([]))

// function lastItem(last){
// return last[last.length - 1]

// }

// console.log(lastItem([null,5,false]))

// function arrSum(sum){
//   let num = 0
// for ( let i=0; i < sum.length  ; i++){
//   //This is how you loop through every element in an array
// num = num + sum[i]
// }
// return num

// }

// console.log(arrSum([2,2]))

// function progressiveSum(sum){
//   let num = 0
// for ( let i=1; i <= sum  ; i++){
// num = num + i
// }
//  return num

// }

// console.log(progressiveSum())

// function calcTime(seconds) {
//   let timerMinutes = Math.floor(seconds / 60);
//   let timerSeconds = seconds % 60;

// if (timerMinutes.toString().length === 1){
//   timerMinutes = '0' + timerMinutes
// }
// //This seconf if statement was added to put a zero after the semicolon.//
// if (timerSeconds.toString().length === 1){
//   timerSeconds = '0' + timerSeconds
// }

//   return  timerMinutes + ":" + timerSeconds;
// }

// console.log(calcTime(300));

// function getMax(numbers){
//   let max = numbers[0]
//   for ( let i = 0; i < numbers.length  ; i++){

// if (numbers[i] > max){
//   max = numbers[i]
// }

// }
// return  max

// }

// console.log(getMax([-300,-100,-200]));

// function reverseString(str){
//   //This is a decrementing for loop. you start from//
//   let string = ''
//   for ( let i = str.length - 1; i >= 0   ; i--){
//  string += str[i]
//   }

//   return string
//   }

// console.log(reverseString('abc'));

// function reverseString(str){

//    return str.split('').reverse().join('')
// }
// console.log(reverseString(' I man am regal a german am i'));

// function converttoZeros(num){

//     return new Array(num.length).fill(0)
// }
// console.log(converttoZeros([0,0,'dddd']));

// function converttoZeros(num) {
//   return num.map((num) => 0);
// }
// console.log(converttoZeros([0, 0, "dddd", 0, 0, 0]));

// function removeApples(arr) {

//    return  arr.filter(ele => ele !== 'Apple')
// }
// console.log(removeApples(['Banana','Apple','Orange','Apple']));

// function removeApples(arr) {
//  let apples = []
//   for (let i=0; i<arr.length; ++i){
//     if(arr[i]!=='Apple'){
//          apples.push(arr[i])
//     }
//   }
//   return apples

// }
// console.log(removeApples(['Banana','Apple','Orange','Apple']));

// function filterOutFalsy(arr) {
//  let falsy = []
//   for (let i=0; i<arr.length; ++i){
//     if(!!arr[i] === true){
//          falsy.push(arr[i])
//     }
//   }
//   return falsy

// }
// console.log(filterOutFalsy(["",[],null,undefined,"0"]));

// function convertToBoolean(arr) {
//   return arr.map(arr =>!!arr)
// }
// console.log(convertToBoolean([500,0,"David","",[]]));

// function showRating(rating) {
// //Initialize an empty string
// let stars = ""

// // loop through the rounded down rating
// for(let i = 0; i< Math.floor(rating); ++i){
//   stars = stars + "*"
//   if(i !== Math.floor(rating) - 1){
//   stars = stars + " "
//   } 
// }


// if( !Number.isInteger(rating)){
//   stars = stars + " ."
// }


// return stars
// }

// console.log(showRating(4.5));


// function sortLowToHigh(num) {
//   return num.sort((a,b) => a-b)  
  
// }

// console.log(sortLowToHigh([20,40,10,30,50,10,100000]))

// function sortHighToLow(num) {
//   return num.sort((a,b) => b.price - a.price)  
  
// }

// console.log(sortHighToLow([{id: 1, price: 50},
// {id: 2, price: 30},
// {id: 3, price: 60},
// {id: 3, price: 10}]))

// async function postsByUser(uid) {
//  console.log(uid)

//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   statusRef.innerHTML = data.email
//   console.log(data)
// }

// postsByUser(4);
// Async goes before the function//
async function postsByUser(userId){
  //await goes in front of the promise you want to wait for//
  const promise =  await fetch("https://jsonplaceholder.typicode.com/posts")
const result = await promise.json()
 const posts = result.filter(dog =>dog.userId === userId) 
console.log(posts)
}

postsByUser(4)