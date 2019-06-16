import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'principais-servicos',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'meu-inss', 
    loadChildren: './meu-inss/meu-inss.module#MeuInssPageModule' 
  }, 
  { 
    path: 'agend-req', 
    loadChildren: './agend-req/agend-req.module#AgendReqPageModule' 
  },
  { path: 'acompanhamento', loadChildren: './acompanhamento/acompanhamento.module#AcompanhamentoPageModule' },
  { path: 'novo-requerimento', loadChildren: './novo-requerimento/novo-requerimento.module#NovoRequerimentoPageModule' },
  { path: 'cad-beneficioidoso', loadChildren: './cad-beneficioidoso/cad-beneficioidoso.module#CadBeneficioidosoPageModule' },
  { path: 'termos', loadChildren: './termos/termos.module#TermosPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
