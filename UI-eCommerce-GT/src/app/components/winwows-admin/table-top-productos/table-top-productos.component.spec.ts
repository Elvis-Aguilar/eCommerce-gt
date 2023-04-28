import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTopProductosComponent } from './table-top-productos.component';

describe('TableTopProductosComponent', () => {
  let component: TableTopProductosComponent;
  let fixture: ComponentFixture<TableTopProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTopProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTopProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
