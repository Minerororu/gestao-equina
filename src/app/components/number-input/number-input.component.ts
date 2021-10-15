import {Component, forwardRef, Input, NgZone, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NumberInputComponent),
    }
  ]
})
export class NumberInputComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() value: string;
  @Input() required: string;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() isRequired: boolean;

  private propagateChange = (_: any) => { };
  private propagateTouch = (_: any) => { };

  constructor(private _ngZone: NgZone) { }

  ngOnInit() {
    this.isRequired = this.required != null;
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

  onChange(event : any) {
    this.propagateChange(this.value);
  }

  onTouch(event : any) {
    this.propagateTouch(event);
  }
}

