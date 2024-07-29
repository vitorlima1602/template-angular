import { Component } from '@angular/core';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [PrivateComponent, PublicComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isLogged: boolean = true
}
