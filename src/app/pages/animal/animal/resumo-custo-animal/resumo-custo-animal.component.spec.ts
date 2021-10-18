import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoAnimalComponent } from './resumo-custo-animal.component';

describe('ResumoAnimalComponent', () => {
  let component: ResumoAnimalComponent;
  let fixture: ComponentFixture<ResumoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumoAnimalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
