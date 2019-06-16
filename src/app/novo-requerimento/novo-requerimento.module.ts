import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovoRequerimentoPage } from './novo-requerimento.page';

const routes: Routes = [
  {
    path: '',
    component: NovoRequerimentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovoRequerimentoPage]
})
export class NovoRequerimentoPageModule {}
