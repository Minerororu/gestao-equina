import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputAutocompleteComponent } from './text-input-autocomplete.component';

describe('TextInputAutocompleteComponent', () => {
  let component: TextInputAutocompleteComponent;
  let fixture: ComponentFixture<TextInputAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextInputAutocompleteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
