import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterNavComponent } from './master-nav/master-nav.component';
import { MasterContentComponent } from './master-content/master-content.component';
import { MasterSidebarComponent } from './master-sidebar/master-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MasterNavComponent, MasterContentComponent, MasterSidebarComponent]
})
export class MasterModule { }
