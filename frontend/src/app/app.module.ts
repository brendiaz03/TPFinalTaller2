import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { AppRoutingModule } from './app-routing.module';  // Importa AppRoutingModule
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog'; // Importar MatDialogModule
import { MatButtonModule } from '@angular/material/button'; 
import { EditarComponent } from './editar/editar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EditarComponent,
    ModalComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,  // Asegúrate de importar FormsModule aquí
    MatDialogModule, // Añadir MatDialogModule
    MatButtonModule, // Añadir MatButtonModule
    AppRoutingModule  // Asegúrate de importar AppRoutingModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
