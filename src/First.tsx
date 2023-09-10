// 1. Part 1 console log
// console.log('First')

// 2. Part 2 variable declare
// const country = "I am from Bangladesh, i am proud of my country"

// console.log(country)

// 3. Part 3 variable declare
// let playerName;

// console.log(playerName)

// playerName = 354

// console.log(playerName)

// 4. Part 4 function

// function add(a : number , b: number){
//     return a + b
// }

// console.log(add(5 , 5))

// 5. Part 5 array

// let fruits = ['apple', 'banana', 'mango', 'orange', 'grapes']

// fruits.push('pineapple')

// console.log(fruits)

// another example

// let fruits = ['apple', 32, true, {}]

// fruits.push({
//     name: 'mango',
// })

// Part 6 object

// let person = {
//     name: 'Rahim',
//     age: 25,
//     isMarried: false
// }

// person.name = 'Karim'

// console.log(person)

// Part 7 number type
// let a: number | string; 

// a = 5

// console.log(a)

// part 8 array type union

// let a : (string | number)[] = []

// a = [1, 2, 3, 4, 5, "omee"]

// console.log(a)

// part 9 object type explictly

// let person: {
//     name: string,
//     age: number,
//     isMarried: boolean
// }

// person = {
//     name: 'Rahim',
//     age: 25,
//     isMarried: false
// }

// console.log(person)

// part 10 any type array

// let a: any[] = []

// a = [1, 2, 3, 4, 5, "omee"]

//  part 11 any type object

// let person: any = {
//     name: 'Rahim',
//     age: 25,
//     isMarried: false
// }

// person.name = 'Karim'
// person.adult = true

// console.log(person)

// another example

// let person: {
//     name: any,
//     age: any,
//     isMarried: any
// }

// person = {
//     name: 'Rahim',
//     age: 25,
//     isMarried: false
// }

// Part 12 function type

// const add = (a: number, b: number, c: number = 4) => {
//     console.log(`a is ${a} and b is ${b} and c is ${c}`)
// }

// add(5, 5)

// Part 13 type alias

// type StringOrNumber = string | number
// type userType = {name: string, age: number}


// const useDetails = (
//     id : StringOrNumber,
//     user : userType
// ) => {
//     console.log(`id is ${id} and name is ${user.name} and age is ${user.age}`)
// }

// const sayHello = (user: userType) => {
//     console.log(`Hello ${user.name}`)
// }

// useDetails(1, {name: 'Rahim', age: 25})
// sayHello({name: 'Rahim', age: 25})

// Part 14 Function Signature

// let calaculate: (a: number, b: number, c: string) => number

// calaculate = (a, b, c) => {
//     if(c === 'add'){
//         return a + b
//     }else{
//         return a - b
//     }
// }

// console.log(calaculate(5, 8, 'add'))

// another example

// let useDetails: (id: number | string, user: {name: string, age: number}) => void

// useDetails = (id: number | string, user : {
//     name: string,
//     age: number
// }) => {
//     console.log(`id is ${id} and name is ${user.name} and age is ${user.age}`)
// }

// useDetails(1, {name: 'Rahim', age: 25})

// Part 15 Classes

// class Person {
//     name: string;
//     age: number;
//     isMarried: boolean;

//     constructor(name: string, age: number, isMarried: boolean){
//         this.name = name;
//         this.age = age;
//         this.isMarried = isMarried;
//     }

//     sayHello(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// const person = new Person('Rahim', 25, false)

// person.sayHello()

// console.log(person)

// const people: Person[] = []

// people.push(new Person('Rahim', 25, false))
// people.push(new Person('Karim', 25, false))

// console.log(people)

// Part 16 Access Modifiers

// class Person {
    // public name: string;
    // private age: number;
    // private isMarried: boolean;

    // constructor(name: string, age: number, isMarried: boolean){
    //     this.name = name;
    //     this.age = age;
    //     this.isMarried = isMarried;
    // }

//     constructor(
//         public name: string,
//         private age: number,
//         private isMarried: boolean
//     ){}

//     sayHello(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// const person = new Person('Rahim', 25, false)

// person.name = 'Karim'

// person.sayHello()

// Part 17 interface

// interface PersonInterface {
//     name: string,
//     age: number,
//     isMarried: boolean,
// }

// const person: PersonInterface = {
//     name: 'Rahim',
//     age: 25,
//     isMarried: false
// }

// console.log(person)

// another example

interface PersonInterface {
    // name: string,
    // age: number,
    // isMarried: boolean,

    sayHello(): void
}

class Person implements PersonInterface {
    constructor(
        public name: string,
        private age: number,
        private isMarried: boolean
    ){}

    sayHello(){
        console.log(`Hello ${this.name} and age is ${this.age} and isMarried is ${this.isMarried}`)
    }
}

const person = new Person('Rahim', 25, false)

person.sayHello()




