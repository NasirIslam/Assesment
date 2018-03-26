import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterNavComponent } from './master-nav/master-nav.component';
import { MasterContentComponent } from './master-content/master-content.component';

import { SharedModule } from '../shared/shared.module';
import { MasterToolbarComponent } from './master-toolbar/master-toolbar.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule

  ],
  exports:[MasterNavComponent,MasterContentComponent,MasterToolbarComponent],
  declarations: [MasterNavComponent, MasterContentComponent, MasterToolbarComponent]
})
export class MasterModule { }
