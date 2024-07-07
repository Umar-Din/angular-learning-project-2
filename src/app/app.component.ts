import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './server/server.component';
import { TrafficComponent } from './traffic/traffic.component';
import { SupportComponent } from './support/support.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[HeaderComponent,ServerComponent,TrafficComponent,SupportComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
}
