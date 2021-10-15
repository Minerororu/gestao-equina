import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoDemonstrativoComponent } from './resumo-demonstrativo.component';

describe('ResumoDemonstrativoComponent', () => {
  let component: ResumoDemonstrativoComponent;
  let fixture: ComponentFixture<ResumoDemonstrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoDemonstrativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoDemonstrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
