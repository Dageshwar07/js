// (function (a, b) {
//     console.log(a + b)
// }(3, 8))


// const ans = function sub(a, b) {
//     return (a + b)
// }
// const res = ans(7,4)
// console.log(res)


// const sum = (a,b) => {
//     console.log(a+b)
// }
// (sum(5,6))



// var a = 50
// const c = 70

// function print() {
//   let  b = 10
// var a = 7

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// print()

const obj = [{
    name: "dageshwar",
    gender: "male",
    roll: 111


}, {
    name: "pratik",
    gender: "male",
    roll: 112

}]

// const stud = obj.map((val, i, arr) => {

//     return (val.roll + " " + i)
// })

// const stud = obj.filter((val) => val.roll == 111)
// console.log(stud)


// for (const key in obj) {

//     console.log(key.name)

// }
// const a = [1, 2, 3]
// let b = [1, 2, 3]
// console.log(a === b)


// num = 4
// switch (num) {
//     case 1: console.log('A')

//         break;
//     case 2: console.log('B')

//         break;
//     case 3: console.log('C')

//         break;
//     case 4: console.log('D')

//         break;
//     default:
//         break;
// }

// const d = Date()
// console.log(d)


// for (i = 0; i <= 10; i++) {
//     console.log("dagu" + i)
// }
//  i = 0
// while (i <= 10) {
//     console.log(i)
//     i++
// }


// let i=0
// do {
//     console.log(i)

//     i++
// } while (i <= 10);


// const rectangle = {
//     length: 1,
//     beadth: 2,
//     draw: function () {
//         console.log("first")
//     }

// }

// factory function

// function creatRectangle(len, bea) {

//     return rectangle = {
//         length:len,
//         beadth:bea,
//         draw: function () {
//             console.log("first")
//         }

//     }
// }

// const rectangleobj1 = creatRectangle(5, 6)
// const rectangle1 = creatRectangle(5, 9)
// console.log(rectangleobj1)
// console.log(rectangle1)



// constructor function

// function Rectangle(len, bre) {

//     this.length = len,
//         this.breadth = bre,
//         this.draw = function () {
//             console.log("drawing")

//         }
// }
// const rectangleobj1 = new Rectangle(5, 6)

// rectangleobj1.color = 'red'
// console.log(rectangleobj1)

// delete rectangleobj1.color;
// console.log(rectangleobj1)

// console.log(Rectangle.constructor)


// class Result {
//     constructor(r,n) {
//         this.name=n,
//         this.roll=r
//     }
// }
// const b1 = new Result('dagesh',12)
// console.log(b1)


// let rectangle = {
//     len: 9,
//     bre: 8
// }
// for (let key in rectangle) {
//     console.log(key, rectangle[key])
// }


// only use in iterables like array map
// for (let key of Object.entries(rectangle)) {
//     console.log(key)
// }



// object clone
// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// }
// let dest = {}
// for (const key in src) {
//     dest[key] = src[key]
// }
// src.a++
// console.log(dest)

// --------2------------------
//  let src = {
//         a: 10,
//         b: 20,
//         c: 30
// }
// let dest = Object.assign({}, src)
// console.log(dest)
// src.a++
//     console.log(dest)
// ---------3-----------
// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// }
// let dest = { ...src }
// console.log(dest)
// src.a++
// console.log(dest)


// console.log(Math.min(5,4)
// )

//  String methods-
// let firstname = 'dageshwar  '
// let lastname = new String('das')
// console.log(lastname.includes('d'))
// console.log(lastname.startsWith('s'))
// console.log(lastname.endsWith('s'))
// console.log(lastname.toUpperCase())
// console.log(firstname.trim())
// console.log(lastname.replace('das', 'manik'))
// console.log(lastname.split(''))

//  string litrals
// const sentance = `this
//  is my
//   name`
// console.log(sentance)


// Date funtion
// let date = new Date()
// // date.setFullYear('1999')
// console.log(date)

// const d = date.getFullYear()
// console.log(d)


// array
// const num = [3, 4, 5, 6, 7, 8]

// console.log(num.push(9, 10))
// console.log(num.unshift(2))
// console.log(num.splice(2, 0, 'hii'))
// console.log(num.indexOf(9))
// console.log(num.includes(8))
// console.log(num)

// finding reff variable
// const student = [
//     {
//         sn: 1, name: 'dageshwar'
//     },
//     { sn: 2, name: 'pratik' }

// ]

// const stu = student.find((student) =>student.name = 'pratik'

// )

// console.log(stu)

// delete element
// const num = [1, 2, 3, 4, 5,6]

// console.log(num.pop())
// console.log(num.shift())
// console.log(num.splice(2,1))
// console.log(num)

// deleting
// const num = [1, 2, 3, 4, 5, 6]
// const num2 = num
// num2.length = 0
// // console.log(num2)
// // console.log(num2)

// console.log(num.splice(0, num.length))


// combine
// const num = [1, 2, 3]
// const num1 = [4, 5, 6]
// const combine = num.concat(num1)
// console.log(combine)

// console.log(combine.slice(0,3))
// console.log(combine.slice(3,6))


// spread
// const num = [1, 2, 3]
// const num1 = [4, 5, 6]
// const combine = [...num, ...num1]
// console.log(combine)

// let arr = [10, 20, 30, 40]
// for (const index of arr) {
//     console.log(index)

// }

// arr.forEach(function (num) {
//     console.log(num)
// })


// let message = 'this is my message'
// let parts = message.split(' ')
// console.log(parts)
// let joined = parts.join('-')
// console.log(joined)

// let num = [90, 70, 80, 88, 99, 66, 54]
// console.log(num.sort().reverse())

// filter function

// let num = [90, -70, 80, -88, 99, 66, -54]


// const res = num.filter(function (val) {

//     return val >= 0
// })
// console.log(res)

// map function

// let num = [90, -70, 80, -88, 99, 66, -54]
// const res = num.map(function (val, i, arr) {
//     console.log(val)
// })


// let numbers = [90, -70, 80, -88, 99, 66, -54]
// let filtered = numbers.filter((value) =>
//     value >= 0

// )
// let items = filtered.map(function (num) {
//     return { value: num }
// }
// )
// console.log(items)

// chaining


// functions

// function sum() {
//    console.log("hello jee")
// }
// sum()

// function expression

// const sum = function (a,b) {
//     console.log("the sum is " +(a+b))
// }
// sum(8,9)


// arrow function
// const sum = ((a, b) => {
// console.log(a+b)

// })
// sum(6, 7)




// function sum(a, b) {
//     console.log(arguments)
//     return a + b


// }
// console.log(sum(2, 5, 5, 6, 7, 8))

// rest operator
// function sum(num, ...args) {
//     console.log(num)
//     console.log(args)
// }
// sum(1,2,4,5,6,)

// default parameter

// function interest(p, r = 10, t = 30) {
//     return p * r * t / 100

// }
// console.log(interest(100))


// const arr = [1, 2, 3, 4, 5]
// total = 0
// for (const value of arr) {
//     total = total + value

// }
// console.log(total)
// const total = arr.reduce((acc, curr) => acc + curr, 0)
// console.log(total)

// Asyncronous javascript


// setTimeout(function () {
//     console.log("third")

// },3000)
// function sync() {
//     console.log("first")
// }
// sync()
// console.log("second")


// let promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("inside 1")
//     }, 3000);
//     // res(2000)
//     rej("error aaaye hai")
// }).then(() => {
//     console.log("everything is fine in promise 1")
// }).catch(() => {
//     console.log("something is wrong in promise 1")
// })
// let promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("inside 2")
//     }, 3000);
//     res(3000)
//     // rej(new Error("error aaaye hai"))
// }).then(() => {
//     console.log("everything is fine in promise 2")
// }).catch(() => {
//     console.log("something is wrong in promise 2")
// })



// console.log("phla")


// async-await
// async function utility() {
//     let delhi = new Promise((res, rej) => {
//         setTimeout(() => {
//             res("delhi me bhut garmi hai")
//         }, 2000)
//     })
//     let hydrabad = new Promise((res, rej) => {
//         setTimeout(() => {
//             res("hydrabad me bhut tandi hai")
//         }, 4000)
//     })
//     let dm =await delhi
//     let hy =  hydrabad
//     return [dm, hy];
// }
// console.log(utility()
// )


// fetch api

// async function data() {

//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let output = await content.json()
//     console.log(output)

// }
// data()

// async function helper() {

//     let option = {
//         method: 'DELETE',
//         body: JSON.stringify({
//             "userId": 1,
//             "id": 1,
//             "title": "daku",
//             "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"

//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     }
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1', option)
//     let res = content.json()
//     return res
// }

// async function utility() {
//     let ans = await helper()
//     console.log(ans)
// }
// utility()

// closure

// function myfun(a) {
//     const name = 'dageshwar'
//     function displayName() {
//         console.log(name +" " +a)
//     }
//     return displayName()
// }
// const res = myfun("hello")
