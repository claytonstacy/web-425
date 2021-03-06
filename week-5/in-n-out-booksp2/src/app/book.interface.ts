/*
============================================
Title: 5.3 - Data Tables
Author: Clayton Stacy
Date: 9 August 2020
Modified by: Clayton Stacy
Description: Continue Angular Demonstration
============================================
*/

export interface IBook {
    isbn: string;
    title: string;
    description: string;
    numOfPages: number;
    authors: Array<string>;
}