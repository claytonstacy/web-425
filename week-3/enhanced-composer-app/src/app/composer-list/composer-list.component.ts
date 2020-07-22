/*
============================================
Title: 3.2 Passing Data to Routes, Part 1
Author: Clayton Stacy
Date: 21 July 2020
Modified by: Clayton Stacy
Description: Demonstrate Angular Routing and Data Binding
============================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  constructor() {
    this.composers = new Composer().getComposers();
  };

  ngOnInit(): void {
  }

}
