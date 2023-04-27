import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowSegPedidoComponent } from './window-seg-pedido.component';

describe('WindowSegPedidoComponent', () => {
  let component: WindowSegPedidoComponent;
  let fixture: ComponentFixture<WindowSegPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowSegPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowSegPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
