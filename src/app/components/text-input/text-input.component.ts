import { Component, EventEmitter, forwardRef, Input, NgZone, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => TextInputComponent),
        },
    ],
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
    @Input() label: string;
    @Input() placeholder: string;
    @Input() value: string;
    @Input() readonly: boolean;
    @Input() disabled: boolean;
    @Input() filtragem: boolean;
    @Input() isRequired: boolean;
    @Output() filtrar = new EventEmitter<any>();

    private propagateChange = (_: any) => {};
    private propagateTouch = (_: any) => {};

    constructor(private _ngZone: NgZone) {}

    ngOnInit() {}

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
}
