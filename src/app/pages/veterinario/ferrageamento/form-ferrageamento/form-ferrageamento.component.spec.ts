import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFerrageamentoComponent } from './form-ferrageamento.component';

describe('FormFerrageamentoComponent', () => {
  let component: FormFerrageamentoComponent;
  let fixture: ComponentFixture<FormFerrageamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFerrageamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFerrageamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
