"use strict";
// 1. Part 1 console log
// console.log('First')
class Person {
    constructor(name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }
    sayHello() {
        console.log(`Hello ${this.name} and age is ${this.age} and isMarried is ${this.isMarried}`);
    }
}
const person = new Person('Rahim', 25, false);
person.sayHello();
