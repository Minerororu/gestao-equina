import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegistroClinicoComponent } from './list-registro-clinico.component';

describe('ListRegistroClinicoComponent', () => {
  let component: ListRegistroClinicoComponent;
  let fixture: ComponentFixture<ListRegistroClinicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRegistroClinicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegistroClinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
