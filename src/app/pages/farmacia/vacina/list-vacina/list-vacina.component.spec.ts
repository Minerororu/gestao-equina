import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVacinaComponent } from './list-vacina.component';

describe('ListVacinaComponent', () => {
  let component: ListVacinaComponent;
  let fixture: ComponentFixture<ListVacinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListVacinaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVacinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
