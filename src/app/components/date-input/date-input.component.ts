import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  NgZone,
  OnInit,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DateInputComponent),
    },
  ],
})
export class DateInputComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() value: any;
  @Input() required: string;
  @Input() usagem: string;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Output() valor: EventEmitter<any> = new EventEmitter<any>();
  @Output() clearFilter: EventEmitter<any> = new EventEmitter<any>();
  isRequired = false;
  date = new FormControl(new Date());
  startDate: Date;
  private propagateChange = (_: any) => {
    console.log('propagateChange?');
  };
  private propagateTouch = (_: any) => {
    console.log('propagateTouch?');
  };

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.isRequired = this.required != null;
    if (this.value) {
      let arr = this.value.split('/');
      let date = new Date(arr[2], Number(arr[1]) - 1, arr[0]);
      this.date.setValue(date);
    } else {
      this.date.reset();
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
    if (a) {
      let today = a.value as Date;
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var yyyy = today.getFullYear();

      let day = dd + '/' + mm + '/' + yyyy;
      this.valor.emit(day);
    }
  }
  resetarData() {
    this.clearFilter.emit();
    this.date.value = '';
    this.valor.emit('');
  }
}
