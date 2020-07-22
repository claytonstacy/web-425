/*
============================================
Title: 2.3 Data Binding
Author: Professor Krasso
Date: 13 July 2020
Modified by: Clayton Stacy
Description: Demonstrate Angular data binding
============================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
