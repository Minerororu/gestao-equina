import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimalComponent } from './list-animal.component';

describe('FormAnimalComponent', () => {
  let component: ListAnimalComponent;
  let fixture: ComponentFixture<ListAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAnimalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
