/*
============================================
Title: 3.2 Passing Data to Routes, Part 1
Author: Clayton Stacy
Date: 21 July 2020
Modified by: Clayton Stacy
Description: Demonstrate Angular Routing and Data Binding
============================================
*/
import { IComposer } from './composer.interface';

export class Composer {
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

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
