import { Component, OnInit } from '@angular/core';
import { TareasService } from '../core/service/service.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})

export class TareasComponent implements OnInit {
  tareas: any[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(): void {
    this.tareasService.obtenerTareas().subscribe((tareas) => {
      this.tareas = tareas;
    });
  }

  eliminarTarea(id: number): void {
    this.tareasService.eliminarTarea(id).subscribe(() => {
      this.obtenerTareas();
    });
  }
}