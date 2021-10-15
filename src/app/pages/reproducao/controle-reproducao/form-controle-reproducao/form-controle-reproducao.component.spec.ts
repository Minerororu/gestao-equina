import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControleReproducaoComponent } from './form-controle-reproducao.component';

describe('FormControleReproducaoComponent', () => {
  let component: FormControleReproducaoComponent;
  let fixture: ComponentFixture<FormControleReproducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControleReproducaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControleReproducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
