import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExaminacaoComponent } from './form-examinacao.component';

describe('FormExaminacaoComponent', () => {
  let component: FormExaminacaoComponent;
  let fixture: ComponentFixture<FormExaminacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExaminacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExaminacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
