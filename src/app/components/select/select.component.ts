import { Component, forwardRef, Input, NgZone, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { DatabaseService } from 'src/app/helpers/database.service';

@Component({
    selector: 'select-input',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => SelectComponent),
        },
    ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
    constructor(private _ngZone: NgZone, private db: DatabaseService) {}
    @Input() label: string;
    @Input() placeholder: string;
    @Input() value: any;
    @Input() qtdEixos: number;
    @Input() readonly: boolean;
    @Input() disabled: boolean;
    @Input() isRequired: boolean;
    @Input() itens: any[];
    @Input() colecao: string;
    @Input() filtro: any[];
    @Input() preSelect: any;
    @Input() multiple: boolean;
    @Input() selectLabel: string;
    @Input() customLabel: string;

    @Input() itensFromBd: Observable<any[]>;
    @Output() valor: EventEmitter<any> = new EventEmitter<any>();
    oldItens: any[];
    selected: any;
    selectedValue: any;
    private propagateChange = (_: any) => {};
    private propagateTouch = (_: any) => {};

    public objectComparisonFunction = function (option: any, value: any): boolean {
        return option.id === value.id;
    };

    ngOnInit() {
        this.oldItens = [];
        if (this.itens !== undefined) {
            this.itens.forEach((e: any) => {
                this.oldItens.push(e);
            });
        }

        if (this.qtdEixos) {
            this.preSelect = this.value;
            this.itens = [];
            for (let index = 1; index <= this.qtdEixos; index++) {
                this.itens.push(index + '');
            }
        }
        if (this.filtro) {
            this.realizarFiltragem();
        }
        if (!!this.colecao) {
            this.preSelect = this.value;
            this.db
                .getCollection(this.colecao)
                .subscribe((doc) => {
                    if (!this.filtro) {
                        this.itens = doc;
                    }
                    const arrayAux = [];
                    for (const [i, item] of Object.entries(!!this.itens ? this.itens : '')) {
                        if (!this.multiple) {
                            if (item.id == this.preSelect?.id) {
                                this.value = this.itens[Number(i)];
                            }
                        } else {
                            if (this.preSelect?.length > 0) {
                                for (const preSelect of this.preSelect) {
                                    if (item.id == preSelect.id) {
                                        arrayAux.push(this.itens[Number(i)]);
                                    }
                                }
                            }
                        }
                    }
                    if (this.multiple) {
                        this.value = arrayAux;
                    }
                });
        }
    }

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: (_: any) => void): void {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: () => void): void {
        this.propagateTouch = fn;
    }

    onChange(event: any) {
        this.propagateChange(this.value);
    }

    onTouch(event: any) {
        this.propagateTouch(event);
    }

    emitirValor(a: any) {
        this.valor.emit(a.value);
    }

    realizarFiltragem(idFiltro?: any) {
        if (this.filtro) {
            console.log(this.filtro)
            console.log(this.filtro[0], this.filtro[1], idFiltro ? idFiltro : this.filtro[2])
            this.db
                .getCollection(this.colecao, (ref) =>
                    ref.where(this.filtro[0], this.filtro[1], idFiltro ? idFiltro : this.filtro[2])
                )
                .subscribe((doc) => {
                    const v = this.value;
                    this.itens = doc;
                    for (const item of this.itens) {
                        if (item?.id === v?.id) {
                            this.value = item;
                        }
                    }
                });
        }
    }
}
