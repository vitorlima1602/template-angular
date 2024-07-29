import { Component } from '@angular/core';
import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component';
import { SidenavComponent } from '../../../shared/components/sidenav/sidenav.component';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [ToolbarComponent, SidenavComponent],
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss'
})
export class PrivateComponent {

}
