/*
============================================
Title: 3.4 Guarding Routes
Author: Clayton Stacy
Date: 26 July 2020
Modified by: Clayton Stacy
Description: Build a canActivate Route
============================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  assignment: string = 'Secure Profile App';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
