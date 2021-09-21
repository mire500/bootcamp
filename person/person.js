const express = require ("express");
const app = express();

class Person {
    constructor(name, age) {
        if (age < 0) {
            throw new Error("age must be >= 0");
        }
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello, I am", this.name);
    }
}

module.exports = Person

