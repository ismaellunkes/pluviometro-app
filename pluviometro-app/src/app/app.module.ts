import { CadastroPrecipitacaoComponent } from './cadastro-precipitacao/cadastro-precipitacao.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaRegistrosComponent } from './lista-registros/lista-registros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaRegistrosComponent,
    CadastroPrecipitacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
