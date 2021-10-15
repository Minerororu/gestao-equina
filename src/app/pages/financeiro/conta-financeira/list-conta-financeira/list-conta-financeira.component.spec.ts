import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContaFinanceiraComponent } from './list-conta-financeira.component';

describe('ListContaFinanceiraComponent', () => {
  let component: ListContaFinanceiraComponent;
  let fixture: ComponentFixture<ListContaFinanceiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContaFinanceiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContaFinanceiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
