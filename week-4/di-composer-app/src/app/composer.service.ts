import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

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
