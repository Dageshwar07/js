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
const student = [
    {
        sn: 1, name: 'dageshwar'
    },
    { sn: 2, name: 'pratik' }

]

const stu = student.find((student) =>student.name = 'pratik'

)

console.log(stu)