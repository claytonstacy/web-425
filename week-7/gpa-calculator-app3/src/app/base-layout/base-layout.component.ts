/*
============================================
Title: 7.2- Reactive Forms
Author: Clayton Stacy
Date: 23 August 2020
Modified by: Clayton Stacy
Description: Build and process reactive forms
============================================
*/
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Exercise 7.2 - Reactive Forms '
   }

  ngOnInit(): void {
  }
signOut() {
  this.cookieService.deleteAll();
  this.router.navigate(['/session/sign-in']);
}

}
