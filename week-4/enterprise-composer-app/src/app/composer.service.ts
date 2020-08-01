/*
============================================
Title: 4.4 Async Pipe
Author: Clayton Stacy
Date: 1 August 2020
Modified by: Clayton Stacy
Description: Demonstrate reactive programming using pipe, map and filter function
============================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Johann Sebastian Bach", genre: "Baroque"
      },
      {
        composerId: 200, fullName: "Ludwig Beethoven", genre: "Classical"
      },
      {
        composerId: 300, fullName: "Jacob Ludwig Felix Mendelssohn", genre: "Romantic"
      },
      {
        composerId: 400, fullName: "Johann Sebastian Bach", genre: "Romantic"
      },
      {
        composerId: 500, fullName: "Aaron Copland", genre: "20th Century"
      }
    ];
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name.toLowerCase()) > -1)));
  }
}
