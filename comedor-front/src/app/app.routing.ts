import { ListaComedorComponent } from './lista-comedor/lista-comedor.component';
import { CargarComponent } from './components/cargar/cargar.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: CargarComponent },
    { path: 'listado', component: ListaComedorComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
