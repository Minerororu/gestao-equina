import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControleFolicularComponent } from './form-controle-folicular.component';

describe('FormControleFolicularComponent', () => {
  let component: FormControleFolicularComponent;
  let fixture: ComponentFixture<FormControleFolicularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControleFolicularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControleFolicularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
