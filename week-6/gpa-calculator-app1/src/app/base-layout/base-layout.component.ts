/*
============================================
Title: 6.3- Layouts
Author: Clayton Stacy
Date: 16 August 2020
Modified by: Clayton Stacy
Description: Demonstrate layouts and routing
============================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts '
   }

  ngOnInit(): void {
  }

}
