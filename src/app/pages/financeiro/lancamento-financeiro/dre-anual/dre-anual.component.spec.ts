import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreAnualComponent } from './dre-anual.component';

describe('DreAnualComponent', () => {
  let component: DreAnualComponent;
  let fixture: ComponentFixture<DreAnualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreAnualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DreAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
