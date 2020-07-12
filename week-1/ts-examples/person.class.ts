/*
============================================
Title: 1.4 Typescript
Author: Professor Krasso
Date: 7 July 2020
Modified by: Clayton Stacy
Description: A simple Typescript application
============================================
*/

import { IPerson } from "./person.interface";

class Person implements IPerson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let myName = new Person("Clayton", "Stacy");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);