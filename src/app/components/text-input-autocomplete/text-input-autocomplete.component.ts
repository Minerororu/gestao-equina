import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnyObject } from 'chart.js/types/basic';
import { map, startWith } from 'rxjs/operators';
import { DatabaseService } from 'src/app/helpers/database.service';

@Component({
    selector: 'text-input-autocomplete',
    templateUrl: './text-input-autocomplete.component.html',
    styleUrls: ['./text-input-autocomplete.component.css'],
})
export class TextInputAutocompleteComponent implements OnInit {
    constructor(private db: DatabaseService) {}
    myControl = new FormControl();
    options: any[] = [];
    filteredOptions: any[];
    stringValue: AnyObject = {};

    @Input() label: string;
    @Input() selectLabel: string;
    @Input() colecao: string;

    @Output() valor: EventEmitter<any> = new EventEmitter<any>();
    @Input() value: any;
    @Input() filtro: any[];
    @Input() multiple: boolean;
    @Input() preSelect: any;
    @Input() itens: any[];

    @Input() isRequired: boolean;

    
    ngOnInit() {
        if (!this.value && this.selectLabel) {
            this.value = { selectLabel: '' };
            this.value.selectLabel = '';
        }
        if (this.colecao) {
            this.preSelect = this.value;
            if (!this.filtro && !this.itens) {
            this.db.getCollection(this.colecao)
                .subscribe((doc) => {
                    this.itens = doc;
                    })
            }else{
                this.db.getCollection(this.colecao, (ref) => 
                ref.where(this.filtro[0], this.filtro[1], this.filtro[2])
                ).subscribe((doc) => {
                const v = this.value;
                this.itens ? '' : this.itens = doc; 
                for (const item of this.itens) {
                    if (item?.id === v?.id) {
                        this.value = item;
                    }
                }
            });
            }
                const arrayAux = [];
                    Object.entries(this.itens ? this.itens : '').map(([i, item]) => {
                        if (!this.multiple && item.id == this.preSelect?.id) {
                            this.value = this.itens[Number(i)];
                        } else {
                            if (this.preSelect?.length > 0) {
                                this.preSelect.map((preSelect) => {
                                    item.id == preSelect.id ? arrayAux.push(this.itens[Number(i)]) : '';
                                });
                            }
                        }
                    });
                    if (this.multiple) {
                        this.value = arrayAux;
                    }
        };
        this.myControl.valueChanges
            .pipe(
                startWith(''),
                map((value) => this._filter(value))
            )
            .subscribe((doc) => (this.filteredOptions = doc));

        if (this.value) {
            this.myControl.setValue(this.value[this.selectLabel]);
        }

        this.filtro ? this.db.getCollection(this.colecao, (ref) =>
        ref.where(this.filtro[0], this.filtro[1], this.filtro[2])
    )
            .subscribe((doc) => {
                    this.options = doc;
            }) :         this.db
            .getCollection(this.colecao)
            .subscribe((doc) => {
                this.options = doc;
            });;
        
    }

    change(){
        this.valor.emit(this.stringValue);
    }

    private _filter(value: string): any[] {
        const filterValue = typeof value === 'string' ? value.toLowerCase() : '';

        return this.options.filter((option) => option[this.selectLabel]?.toLowerCase().includes(filterValue));
    }

    realizarFiltragem(idFiltro?: any) {
        if (this.filtro) {
            this.db.getCollection(this.colecao, (ref) =>
                    ref.where(this.filtro[0], this.filtro[1], idFiltro ? idFiltro : this.filtro[2])
                )
                .subscribe((doc) => {
                    const v = this.value;
                    this.itens? '': this.itens = doc;
                    for (const item of this.itens) {
                        if (item?.id === v?.id) {
                            this.value = item;
                        }
                    }
                });
        }else {
            this.db.getCollection(this.colecao)
                .subscribe((doc) => {
                    const v = this.value;
                    this.itens? '': this.itens = doc;
                    for (const item of this.itens) {
                        if (item?.id === v?.id) {
                            this.value = item;
                        }
                    }
                });
        }
    }
}
