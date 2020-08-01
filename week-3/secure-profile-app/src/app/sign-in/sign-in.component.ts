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
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoggedIn: boolean = false;


  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }
  signIn() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
