import { Component, OnInit } from '@angular/core';
import { Tarea, TareasService } from '../core/service/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  standalone: true,
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  imports: [CommonModule, FormsModule],
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService) {}

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
  agregarTarea(): void {
    // if (this.nuevaTarea.titulo && this.nuevaTarea.descripcion) {
    //   this.tareasService.crearTarea(this.nuevaTarea).subscribe(
    //     (data) => {
    //       console.log('Tarea agregada:', data);
    //       this.tareas.push(data); // Agrega la nueva tarea al array local
    //       this.nuevaTarea = { titulo: '', descripcion: '' }; // Limpia el formulario
    //     },
    //     (error) => {
    //       console.error('Error al agregar la tarea:', error);
    //     }
    //   );
    // }
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
}
