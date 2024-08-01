import { Routes } from '@angular/router';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { ErrorComponent } from './domains/shared/components/error/error.component'
 
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
                path: 'paquetes',
                loadComponent: () => import('./domains/servicios/paquetes/paquetes.component')
            },

            {  
                path: 'hoteles',
                loadComponent: () => import('./domains/servicios/hoteles/hoteles.component')
            },

            {  
                path: 'vuelos',
                loadComponent: () => import('./domains/servicios/vuelos/vuelos.component')
            },

            {  
                path: 'nosotros',
                loadComponent: () => import('./domains/products/pages/nosotros/nosotros.component')
            },

            {  
                path: 'contactenos',
                loadComponent: () => import('./domains/products/pages/contactenos/contactenos.component')
            }, 
            {  
                path: 'detalles',
                loadComponent: () => import('./domains/servicios/paquetes/detalles/detalles.component')
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
        component: ErrorComponent,
        
    }
];