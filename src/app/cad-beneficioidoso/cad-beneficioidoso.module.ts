import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadBeneficioidosoPage } from './cad-beneficioidoso.page';

const routes: Routes = [
  {
    path: '',
    component: CadBeneficioidosoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadBeneficioidosoPage]
})
export class CadBeneficioidosoPageModule {}
