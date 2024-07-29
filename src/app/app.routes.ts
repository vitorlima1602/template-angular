import { Routes } from '@angular/router';
import { authGuard } from './core/guards/CanActivate';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/layout/layout.component').then(m => m.LayoutComponent),
        children: [
          {
            path: 'home',
            loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
            canActivate: [authGuard],
          },
        //   {
        //     path: 'about',
        //     loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
        //   }
        ]
      },
];
