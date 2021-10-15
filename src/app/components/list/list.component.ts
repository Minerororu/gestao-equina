import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
    @Input() cabecalhos: any[];
    @Input() valores: any[];
    @Input() campos: any[];
    @Input() usagem: string;
    @Output() deleteFunction = new EventEmitter<any>();
    @Output() editFunction = new EventEmitter<any>();
    @Output() resumoFunction = new EventEmitter<any>();
    @Output() fecharFunction = new EventEmitter<any>();
    @Output() clickFunction = new EventEmitter<any>();
    @Output() resumoFunction2 = new EventEmitter<any>();


    constructor() {}

    verificaArray(campo: any) {
        return Array.isArray(campo);
    }
    ngOnInit(): void {}
}
