import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFerrageamentoComponent } from './list-ferrageamento.component';

describe('ListFerrageamentoComponent', () => {
  let component: ListFerrageamentoComponent;
  let fixture: ComponentFixture<ListFerrageamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFerrageamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFerrageamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
