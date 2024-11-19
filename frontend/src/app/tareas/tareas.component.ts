import { Component, OnInit } from '@angular/core';
import { Tarea, TareasService } from '../core/service/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-tareas',
  standalone: true,
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  imports: [CommonModule, FormsModule],
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(
    private tareasService: TareasService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(): void {
    this.tareasService.obtenerTareas().subscribe(
      (data) => {
        this.tareas = data;
      },
      (error) => {
        console.error('Error al obtener las tareas:', error);
      }
    );
  }

  eliminarTarea(id: number): void {
    // this.tareasService.eliminarTarea(id).subscribe(
    //   (data) => {
    //     console.log(data);  // Aquí puedes verificar que la respuesta sea el objeto { message: 'Item eliminado' }
    //     this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
    //   },
    //   (error) => {
    //     console.error('Error al eliminar la tarea:', error);
    //   }
    // );
  }

  openFormulario(tarea?: Tarea): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      width: '400px',
      data: tarea || null,
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        this.obtenerTareas();
      }
    });
  }
}
