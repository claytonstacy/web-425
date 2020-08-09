/*
============================================
Title: 5.4 - Dialogs
Author: Clayton Stacy
Date: 9 August 2020
Modified by: Clayton Stacy
Description: Continue Angular Demonstration with Dialogs
============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;
  constructor() {
    this.assignment = 'Exercise 5.3 Dialogs'
  }
}
