import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharitiesListPage } from './charities-list';

@NgModule({
  declarations: [
    CharitiesListPage,
  ],
  imports: [
    IonicPageModule.forChild(CharitiesListPage),
  ],
})
export class CharitiesListPageModule {}
