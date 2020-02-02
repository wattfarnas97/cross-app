import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLocationsPageRoutingModule } from './new-locations-routing.module';

import { NewLocationsPage } from './new-locations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLocationsPageRoutingModule
  ],
  declarations: [NewLocationsPage]
})
export class NewLocationsPageModule {}
