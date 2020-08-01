/*
============================================
Title: 3.3 Passing Data to Routes, Part 2
Author: Clayton Stacy
Date: 21 July 2020
Modified by: Clayton Stacy
Description: Routing
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
  isLoggedIn: Boolean;
  assignment: string = 'Secure Profile App';

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'))
  }

  ngOnInit(): void {
  }

}
