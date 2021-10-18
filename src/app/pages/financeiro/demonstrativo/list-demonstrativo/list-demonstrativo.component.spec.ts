import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemonstrativoComponent } from './list-demonstrativo.component';

describe('ListDemonstrativoComponent', () => {
  let component: ListDemonstrativoComponent;
  let fixture: ComponentFixture<ListDemonstrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDemonstrativoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemonstrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
