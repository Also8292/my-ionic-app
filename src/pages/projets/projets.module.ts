import { ProjetPage } from './projet/projet';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetsPage } from './projets';

@NgModule({
  declarations: [
    ProjetsPage,
    ProjetPage
  ],
  imports: [
    IonicPageModule.forChild(ProjetsPage),
  ],
})
export class ProjetsPageModule {}
