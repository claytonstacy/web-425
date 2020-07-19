/*
============================================
Title: 2.4 Routing in Action
Author: Clayton Stacy
Date: 19 July 2020
Modified by: Clayton Stacy
Description: Demonstrate Angular Routing and Data Binding
============================================
*/

import { Component, OnInit } from '@angular/core';
export default class Composer {
  id: string;
  fullName: string;
  genre: string;
  constructor(id: string, fullName: string, genre: string){
    this.id = id;
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer> = [];
  constructor() {
    this.composers = [new Composer("1", "Johann Sebastian Bach", "Baroque"),
  new Composer("2", "Ludwig Beethoven", "Classical"),
  new Composer("3", "Jacob Ludwig Felix Mendelssohn", "Romantic"),
  new Composer("4", "Frederic Chopin", "Romantic"),
  new Composer("5", "Aaron Copland", "20th Century")
  ];
  };

  ngOnInit(): void {
  }

}
