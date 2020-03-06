import { Component, OnInit } from '@angular/core';
import { shoe } from '../shoe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  shoes = shoe;

  constructor() { }

  ngOnInit() {
  }

}
