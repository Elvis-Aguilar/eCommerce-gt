import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaReportsComponent } from './area-reports.component';

describe('AreaReportsComponent', () => {
  let component: AreaReportsComponent;
  let fixture: ComponentFixture<AreaReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
