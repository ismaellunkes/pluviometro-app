import { CadastroPrecipitacaoStorageService } from './services/cadastro-precipitacao-storage.service';
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
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './shared/modal/modal.component';
import { LigouIrrigacaoPipe } from './pipes/ligou-irrigacao.pipe';
import { LocaisPipe } from './pipes/locais.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListaRegistrosComponent,
    CadastroPrecipitacaoComponent,
    NavBarComponent,
    FooterComponent,
    TotalPrecipitacaoComponent,
    ModalComponent,
    LigouIrrigacaoPipe,
    LocaisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
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
