import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NascimentosComponent } from './nascimentos.component';

describe('NascimentosComponent', () => {
  let component: NascimentosComponent;
  let fixture: ComponentFixture<NascimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NascimentosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NascimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
