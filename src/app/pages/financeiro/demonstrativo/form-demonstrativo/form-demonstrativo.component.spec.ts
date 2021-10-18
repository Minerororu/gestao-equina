import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemonstrativoComponent } from './form-demonstrativo.component';

describe('FormDemonstrativoComponent', () => {
  let component: FormDemonstrativoComponent;
  let fixture: ComponentFixture<FormDemonstrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDemonstrativoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemonstrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
