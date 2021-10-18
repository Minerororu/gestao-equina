import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVermifugacaoComponent } from './list-vermifugacao.component';

describe('ListVermifugacaoComponent', () => {
  let component: ListVermifugacaoComponent;
  let fixture: ComponentFixture<ListVermifugacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListVermifugacaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVermifugacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
