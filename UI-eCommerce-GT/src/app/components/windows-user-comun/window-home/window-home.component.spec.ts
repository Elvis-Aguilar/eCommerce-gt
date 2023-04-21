import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowHomeComponent } from './window-home.component';

describe('WindowHomeComponent', () => {
  let component: WindowHomeComponent;
  let fixture: ComponentFixture<WindowHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
