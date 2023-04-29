import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClientesMasPedidosComponent } from './table-clientes-mas-pedidos.component';

describe('TableClientesMasPedidosComponent', () => {
  let component: TableClientesMasPedidosComponent;
  let fixture: ComponentFixture<TableClientesMasPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableClientesMasPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClientesMasPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
