import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResponsavelComponent } from './list-responsavel.component';

describe('ListResponsavelComponent', () => {
  let component: ListResponsavelComponent;
  let fixture: ComponentFixture<ListResponsavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResponsavelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
