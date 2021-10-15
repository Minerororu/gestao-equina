import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsoProcedimentoComponent } from './form-uso-procedimento.component';

describe('FormUsoProcedimentoComponent', () => {
  let component: FormUsoProcedimentoComponent;
  let fixture: ComponentFixture<FormUsoProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUsoProcedimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUsoProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
