import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/windows-root/login/login.component';
import { RegistroComponent } from './components/windows-root/registro/registro.component';
import { NavBarComponent } from './components/windows-root/nav-bar/nav-bar.component';
import { FooterComponent } from './components/windows-root/footer/footer.component';
import { PerfilComponent } from './components/windows-user-comun/perfil/perfil.component';
import { CardCategoriaComponent } from './components/windows-user-comun/card-categoria/card-categoria.component';
import { CardProductoComponent } from './components/windows-user-comun/card-producto/card-producto.component';
import { HomeProductosComponent } from './components/windows-user-comun/home-productos/home-productos.component';
import { WindowHomeComponent } from './components/windows-user-comun/window-home/window-home.component';
import { CarritoCompraComponent } from './components/windows-user-comun/carrito-compra/carrito-compra.component';
import { FormProductoComponent } from './components/windows-user-comun/form-producto/form-producto.component';
import { WindowSegPedidoComponent } from './components/windows-user-comun/window-seg-pedido/window-seg-pedido.component';
import { GestionPedidosComponent } from './components/windows-user-paqueteria/gestion-pedidos/gestion-pedidos.component';
import { GestionProductosComponent } from './components/windows-user-paqueteria/gestion-productos/gestion-productos.component';
import { AreaReportsComponent } from './components/winwows-admin/area-reports/area-reports.component';
import { TableTopProductosComponent } from './components/winwows-admin/table-top-productos/table-top-productos.component';
import { TableClientesGananciasComponent } from './components/winwows-admin/table-clientes-ganancias/table-clientes-ganancias.component';
import { TableClientesMasProductVendeComponent } from './components/winwows-admin/table-clientes-mas-product-vende/table-clientes-mas-product-vende.component';
import { TableClientesMasPedidosComponent } from './components/winwows-admin/table-clientes-mas-pedidos/table-clientes-mas-pedidos.component';
import { TableClientesMasProductosComponent } from './components/winwows-admin/table-clientes-mas-productos/table-clientes-mas-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavBarComponent,
    FooterComponent,
    PerfilComponent,
    CardCategoriaComponent,
    CardProductoComponent,
    HomeProductosComponent,
    WindowHomeComponent,
    CarritoCompraComponent,
    FormProductoComponent,
    WindowSegPedidoComponent,
    GestionPedidosComponent,
    GestionProductosComponent,
    AreaReportsComponent,
    TableTopProductosComponent,
    TableClientesGananciasComponent,
    TableClientesMasProductVendeComponent,
    TableClientesMasPedidosComponent,
    TableClientesMasProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
