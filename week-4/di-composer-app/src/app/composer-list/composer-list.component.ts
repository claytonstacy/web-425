/*
============================================
Title: 4.2 Inversion of Control and Dependency Injection
Author: Clayton Stacy
Date: 1 August 2020
Modified by: Clayton Stacy
Description: Demonstrate Angular Routing and Data Binding
============================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  };

  ngOnInit(): void {
  }

}
