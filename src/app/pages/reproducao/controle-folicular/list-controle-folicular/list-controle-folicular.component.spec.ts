import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListControleFolicularComponent } from './list-controle-folicular.component';

describe('ListControleFolicularComponent', () => {
  let component: ListControleFolicularComponent;
  let fixture: ComponentFixture<ListControleFolicularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListControleFolicularComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListControleFolicularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
