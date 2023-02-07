import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  open: boolean = true;
  disabled: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  log(isOpened: boolean) {
    console.log(isOpened);
  }
}
