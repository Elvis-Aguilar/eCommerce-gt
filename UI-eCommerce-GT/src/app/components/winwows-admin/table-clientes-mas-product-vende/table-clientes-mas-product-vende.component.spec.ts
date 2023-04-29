import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClientesMasProductVendeComponent } from './table-clientes-mas-product-vende.component';

describe('TableClientesMasProductVendeComponent', () => {
  let component: TableClientesMasProductVendeComponent;
  let fixture: ComponentFixture<TableClientesMasProductVendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableClientesMasProductVendeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClientesMasProductVendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
