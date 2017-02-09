import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suplari-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() displayProp;
  @Input() items;
  @Input() selectedItem: any;
  @Output() selectedItemChange = new EventEmitter<any>();

  constructor() { }

  itemClicked(item) {
    this.selectedItem = item;
    this.selectedItemChange.emit(this.selectedItem);
  }

  getDisplay(item) {
    return item[this.displayProp];
  }

  ngOnInit() {
  }

}
