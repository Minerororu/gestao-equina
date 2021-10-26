import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDoencaComponent } from './form-doenca.component';

describe('FormDoencaComponent', () => {
  let component: FormDoencaComponent;
  let fixture: ComponentFixture<FormDoencaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDoencaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDoencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
