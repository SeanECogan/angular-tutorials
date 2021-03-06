import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {

  @Input() title: string;

  constructor() {
    this.title = '';
  }

  ngOnInit(): void {
  }

}
