import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControleColetaSemenComponent } from './form-controle-coleta-semen.component';

describe('FormControleColetaSemenComponent', () => {
  let component: FormControleColetaSemenComponent;
  let fixture: ComponentFixture<FormControleColetaSemenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControleColetaSemenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControleColetaSemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
