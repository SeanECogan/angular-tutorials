import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  favoriteBooks: string[];

  constructor() {
    this.favoriteBooks = [
      "The Fellowship of the Ring",
      "The Eye of the World",
      "Dune",
      "The Two Towers",
      "The Return of the King",
      "A Memory of Light"
    ];
  }

  ngOnInit(): void {
  }

}
