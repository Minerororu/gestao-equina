import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExameComponent } from './list-exame.component';

describe('ListExameComponent', () => {
  let component: ListExameComponent;
  let fixture: ComponentFixture<ListExameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListExameComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
