import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVermifugoComponent } from './list-vermifugo.component';

describe('ListVermifugoComponent', () => {
  let component: ListVermifugoComponent;
  let fixture: ComponentFixture<ListVermifugoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVermifugoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVermifugoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
