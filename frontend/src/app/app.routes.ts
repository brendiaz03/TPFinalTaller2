import { Routes } from '@angular/router';

//Agrego el componente Home
import { EditarComponent } from './editar/editar.component';
import { ModalComponent } from './modal/modal.component'; // Ruta del modal

export const routes: Routes = [ 
    //Agrego el path componente Home
    { path: 'editar', component: EditarComponent }, //Defino la ruta del componente
    { path: 'modal', component: ModalComponent } // Ruta para tu modal
];
