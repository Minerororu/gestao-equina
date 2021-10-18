import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCentroCustoComponent } from './form-centro-custo.component';

describe('FormCentroCustoComponent', () => {
  let component: FormCentroCustoComponent;
  let fixture: ComponentFixture<FormCentroCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCentroCustoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCentroCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
