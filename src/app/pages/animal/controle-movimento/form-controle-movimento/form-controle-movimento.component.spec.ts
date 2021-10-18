import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControleSaidaComponent } from './form-controle-movimento.component';

describe('FormControleSaidaComponent', () => {
  let component: FormControleSaidaComponent;
  let fixture: ComponentFixture<FormControleSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormControleSaidaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControleSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
