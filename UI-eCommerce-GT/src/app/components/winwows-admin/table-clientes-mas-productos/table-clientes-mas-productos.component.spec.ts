import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClientesMasProductosComponent } from './table-clientes-mas-productos.component';

describe('TableClientesMasProductosComponent', () => {
  let component: TableClientesMasProductosComponent;
  let fixture: ComponentFixture<TableClientesMasProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableClientesMasProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClientesMasProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
