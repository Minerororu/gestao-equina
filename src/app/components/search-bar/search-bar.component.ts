import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  value : string;
  @Input() label : string;
  @Output() filter: EventEmitter<any> = new EventEmitter<any>();
  @Output() limparFiltro: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  clear(){
    this.value = ''
    this.limparFiltro.emit()
  }
}
