import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import{ MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';  
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  items: any[] = [
    { id: 1, name: 'Tarea I', description: 'Descripción tarea I', taskChecked: false },
    { id: 2, name: 'Tarea II', description: 'Descripción tarea II', taskChecked: true }
  ];
 
 
  constructor(private router: Router, private dialog: MatDialog ) {}
  title = 'frontend';
  
  onClick(): void {
    console.log('Redirect triggered');
    this.router.navigate(['/home']);
  }
/*
  openEditModal(item: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: { item }
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.items.findIndex((i) => i.id === result.id);
        if (index !== -1) {
          this.items[index] = result;
        }
      }
    });
  
}*/
// Método para abrir el modal

openEditModal(): void {
  const dialogRef = this.dialog.open(EditarComponent, {
    width: '500px',  // Puedes ajustar el tamaño del modal
    data: { name: 'Tarea a editar' }  // Puedes pasar los datos necesarios al componente Editar
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Datos editados:', result);
    }
  });
}


//Maneja el estado del checkbox

toggleTask(item: any): void {

  item.taskChecked = !item.taskChecked;

}

}
