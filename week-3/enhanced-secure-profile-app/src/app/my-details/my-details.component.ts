/*
============================================
Title: 3.4 Guarding Routes
Author: Clayton Stacy
Date: 26 July 2020
Modified by: Clayton Stacy
Description: Build a canActivate Route
============================================
*/
import { Component, OnInit } from '@angular/core';
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#Typescript", "#2020", "#CodingWithAngular", "ngOmaha"
  ];
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
  toString() {
    console.log(`\n Full name: ${this.fullName}\n Favorite Food: ${this.favoriteFood}\n Favorite Color: ${this.favoriteColor}`)
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Clayton Stacy", "Greek", "Blue");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
