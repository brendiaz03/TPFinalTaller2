import { Routes } from '@angular/router';

//Agrego el componente Home
import { HomeComponent } from './home/home.component';

export const routes: Routes = [ 
    //Agrego el path componente Home
    { path: 'home', component: HomeComponent } //Defino la ruta del componente
];
