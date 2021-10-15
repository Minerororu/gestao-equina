import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCadastroProcedimentoComponent } from './list-cadastro-procedimento.component';

describe('ListCadastroProcedimentoComponent', () => {
  let component: ListCadastroProcedimentoComponent;
  let fixture: ComponentFixture<ListCadastroProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCadastroProcedimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCadastroProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
