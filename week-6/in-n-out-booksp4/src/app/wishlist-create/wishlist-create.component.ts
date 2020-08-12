/*
============================================
Title: 6.2- Output Properties
Author: Clayton Stacy
Date: 10 August 2020
Modified by: Clayton Stacy
Description: Demonstrate Communication Between Components
============================================
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();
  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }
  addItem(){
    this.addItemEmitter.emit({ title: this.item.title, authors: this.item.authors })
    this.item = {} as IWishlistItem;
  };

}
