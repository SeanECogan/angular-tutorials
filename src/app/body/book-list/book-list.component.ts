import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  showBookList: boolean;
  favoriteBooks: string[];
  newBookTitle: string;

  constructor() {
    this.showBookList = true;

    this.favoriteBooks = [];

    this.newBookTitle = '';
  }

  ngOnInit(): void {
  }

  toggleShowBookList(): void {
    this.showBookList = !this.showBookList;
  }

  addNewBookTitle(): void {
    this.favoriteBooks.push(this.newBookTitle);

    this.newBookTitle = '';
  }
}
