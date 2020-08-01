/*
============================================
Title: 4.3 - Handling Events with Observables
Author: Clayton Stacy
Date: 1 August 2020
Modified by: Clayton Stacy
Description: Demonstrate Angular Routing and Data Binding
============================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  };

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    alert(name);
  }

}
