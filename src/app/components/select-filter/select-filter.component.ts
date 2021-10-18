import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'select-filter',
  templateUrl: './select-filter.component.html',
  styles: [],
})
export class SelectFilterComponent implements OnInit {
  constructor() {}
  @Input() label: string;
  @Input() itens: any[];
  @Input() value: any;
  @Input() usagem: any;
  @Output() filtrarFunc: EventEmitter<any> = new EventEmitter<any>();
  @Output() limparFiltro: EventEmitter<any> = new EventEmitter<any>();
  @Output() valor: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  clearFunc() {
    this.value = '';
    this.limparFiltro.emit();
  }
}
