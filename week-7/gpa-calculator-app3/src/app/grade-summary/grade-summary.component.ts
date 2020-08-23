/*
============================================
Title: 7.2- Reactive Forms
Author: Clayton Stacy
Date: 23 August 2020
Modified by: Clayton Stacy
Description: Build and process reactive forms
============================================
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss']
})


export class GradeSummaryComponent implements OnInit {
  @Input()grade: string;
  @Input()course: string;
  constructor() { }

  ngOnInit(): void {
  }

}
