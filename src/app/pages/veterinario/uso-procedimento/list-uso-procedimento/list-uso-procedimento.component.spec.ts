import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsoProcedimentoComponent } from './list-uso-procedimento.component';

describe('ListUsoProcedimentoComponent', () => {
  let component: ListUsoProcedimentoComponent;
  let fixture: ComponentFixture<ListUsoProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListUsoProcedimentoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsoProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
