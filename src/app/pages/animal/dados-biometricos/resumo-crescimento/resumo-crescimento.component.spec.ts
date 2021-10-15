import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoCrescimentoComponent } from './resumo-crescimento.component';

describe('ResumoCrescimentoComponent', () => {
  let component: ResumoCrescimentoComponent;
  let fixture: ComponentFixture<ResumoCrescimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoCrescimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoCrescimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
