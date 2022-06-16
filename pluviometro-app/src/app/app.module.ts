import { CadastroPrecipitacaoStorageService } from './cadastro-precipitacao/cadastro-precipitacao-storage.service';
import { CadastroPrecipitacaoComponent } from './cadastro-precipitacao/cadastro-precipitacao.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaRegistrosComponent } from './lista-registros/lista-registros.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FooterComponent } from './footer/footer.component';
import { NgxMaskModule } from 'ngx-mask';
import { TotalPrecipitacaoComponent } from './total-precipitacao/total-precipitacao.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaRegistrosComponent,
    CadastroPrecipitacaoComponent,
    NavBarComponent,
    FooterComponent,
    TotalPrecipitacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(),

  ],
  providers: [CadastroPrecipitacaoStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
