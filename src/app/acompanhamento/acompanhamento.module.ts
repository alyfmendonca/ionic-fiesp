import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcompanhamentoPage } from './acompanhamento.page';

const routes: Routes = [
  {
    path: '',
    component: AcompanhamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcompanhamentoPage]
})
export class AcompanhamentoPageModule {}
