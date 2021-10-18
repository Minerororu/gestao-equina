import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListControleSaidaComponent } from './list-controle-movimento.component';

describe('ListControleSaidaComponent', () => {
  let component: ListControleSaidaComponent;
  let fixture: ComponentFixture<ListControleSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListControleSaidaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListControleSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
