/*
============================================
Title: 3.4 Guarding Routes
Author: Clayton Stacy
Date: 26 July 2020
Modified by: Clayton Stacy
Description: Build a canActivate Route
============================================
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private route: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn = next.queryParams.isLoggedIn;
      if(!isLoggedIn) {
        this.route.navigate(["/login"])
      }
    return isLoggedIn;
  }

}
