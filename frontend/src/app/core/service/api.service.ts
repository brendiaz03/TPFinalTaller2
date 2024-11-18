import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private apiUrl = 'http://localhost:3000/tareas';

  constructor(private http: HttpClient) {}

  obtenerTareas(): Observable<Tarea[]> {
    console.log('Entro al service: ');
    const data = this.http.get<Tarea[]>(this.apiUrl);
    console.log('Data del service: ', data);
    return data;
  }

  obtenerTareaPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  crearTarea(tarea: { titulo: string; descripcion: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, tarea);
  }

  editarTarea(
    id: number,
    tarea: { titulo: string; descripcion: string }
  ): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, tarea);
  }

  eliminarTarea(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
