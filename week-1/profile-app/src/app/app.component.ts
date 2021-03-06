/*
============================================
Title: 1.5 Profile App
Author: Professor Krasso
Date: 6 July 2020
Modified by: Clayton Stacy
Description: Create an Angular app and demonstrate
simple data binding
============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Assignment 1.5 - Components';
}
