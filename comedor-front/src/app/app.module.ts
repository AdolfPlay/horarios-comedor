import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CargarComponent } from './components/cargar/cargar.component';
import { SubirService } from './services/subir.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaComedorComponent } from './lista-comedor/lista-comedor.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CargarComponent,
    ListaComedorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SubirService],
  bootstrap: [AppComponent]
})
export class AppModule { }
