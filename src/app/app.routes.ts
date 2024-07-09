import { Routes } from '@angular/router';
import { LayoutComponent } from './domains/shared/component/layout/layout.component';
 
export const routes: Routes = [
    { 
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./domains/products/pages/home/home.component')
            },
            {
                path: '',
                redirectTo: 'home',   
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];