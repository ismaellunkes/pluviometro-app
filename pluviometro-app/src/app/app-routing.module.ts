import { ListaRegistrosComponent } from './lista-registros/lista-registros.component';
import { CadastroPrecipitacaoComponent } from './cadastro-precipitacao/cadastro-precipitacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'novo', pathMatch: 'full' },
  { path: 'novo', component: CadastroPrecipitacaoComponent },
  { path: 'listagem', component: ListaRegistrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
