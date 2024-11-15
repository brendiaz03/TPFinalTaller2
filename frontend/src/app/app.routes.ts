import { Routes } from '@angular/router';

//Agrego el componente Home
import { EditarComponent } from './tareas/editar/editar.component';
import { TareasComponent } from './tareas/tareas.component';

export const routes: Routes = [
  //Agrego el path componente Home
  { path: '', component: TareasComponent }, //Defino la ruta del componente

  { path: 'editar', component: EditarComponent }, //Defino la ruta del componente
];
