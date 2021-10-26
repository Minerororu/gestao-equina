import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoencaComponent } from './list-doenca.component';

describe('ListDoencaComponent', () => {
  let component: ListDoencaComponent;
  let fixture: ComponentFixture<ListDoencaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDoencaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDoencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
