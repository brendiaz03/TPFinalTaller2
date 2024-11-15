import { Routes } from '@angular/router';

//Agrego el componente Home
import { EditarComponent } from './editar/editar.component';

export const routes: Routes = [ 
    //Agrego el path componente Home
    { path: 'editar', component: EditarComponent } //Defino la ruta del componente
];
