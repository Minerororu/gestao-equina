import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVermifugoComponent } from './form-vermifugo.component';

describe('FormVermifugoComponent', () => {
  let component: FormVermifugoComponent;
  let fixture: ComponentFixture<FormVermifugoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVermifugoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVermifugoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
