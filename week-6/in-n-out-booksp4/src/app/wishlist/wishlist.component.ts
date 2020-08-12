/*
============================================
Title: 6.2- Output Properties
Author: Clayton Stacy
Date: 10 August 2020
Modified by: Clayton Stacy
Description: Demonstrate Communication Between Components
============================================
*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})

export class WishlistComponent implements OnInit {
  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
