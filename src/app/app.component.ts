import { Component } from '@angular/core';
import { MasterNavComponent } from './master/master-nav/master-nav.component';
import "hammerjs"
import { SharedModule } from './shared/shared.module';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
