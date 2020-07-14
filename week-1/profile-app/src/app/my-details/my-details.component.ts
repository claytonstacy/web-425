
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
