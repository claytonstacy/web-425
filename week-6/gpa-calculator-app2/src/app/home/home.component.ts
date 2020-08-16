/*
============================================
Title: 6.4- Input Properties
Author: Clayton Stacy
Date: 16 August 2020
Modified by: Clayton Stacy
Description: Demonstrate how to pass data between components
============================================
*/
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A','A-','B+','B','B-','C+','C','C-','D+','D','D-','F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;

  constructor() {
    this.transcriptEntry = {} as ITranscript;
   }

  ngOnInit(): void {
  }
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }
  calculateResults() {
    let gpa: number = 0;
    this.transcriptEntries.forEach((e) => {
      switch (e.grade) {
        case 'A': gpa += 4.0;
        break;
        case 'A-': gpa += 3.70;
        break;
        case 'B+': gpa += 3.33;
        break;
        case 'B': gpa += 3.00;
        break;
        case 'B-': gpa += 2.70;
        break;
        case 'C+': gpa += 2.30;
        break;
        case 'C': gpa += 2.00;
        break;
        case 'C-': gpa += 1.70;
        break;
        case 'D+': gpa += 1.30;
        break;
        case 'D': gpa += 1.0;
        break;
        case 'D-': gpa += .70;
        break;
        case 'F': gpa += 0.00;
      }
    })
    this.gpaTotal = gpa/this.transcriptEntries.length;
  }
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
