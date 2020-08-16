/*
============================================
Title: 6.4- Input Properties
Author: Clayton Stacy
Date: 16 August 2020
Modified by: Clayton Stacy
Description: Demonstrate how to pass data between components
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
