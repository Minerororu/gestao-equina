import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroClinicoComponent } from './form-registro-clinico.component';

describe('FormRegistroClinicoComponent', () => {
  let component: FormRegistroClinicoComponent;
  let fixture: ComponentFixture<FormRegistroClinicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistroClinicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistroClinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
