import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClientesGananciasComponent } from './table-clientes-ganancias.component';

describe('TableClientesGananciasComponent', () => {
  let component: TableClientesGananciasComponent;
  let fixture: ComponentFixture<TableClientesGananciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableClientesGananciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClientesGananciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
