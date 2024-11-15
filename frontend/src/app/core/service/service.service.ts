import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private apiUrl = 'http://localhost:3000/'; // URL base de tu API

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todas las tareas de la API.
   */
  obtenerTareas(): Observable<any[]> {
    // return this.http.get<any[]>(this.apiUrl);
    const data=this.http.get<any[]>(this.apiUrl);
    console.log('Data del service: ', data);
    return data;
  }

  /**
   * Obtiene una tarea específica por su ID.
   * @param id - ID de la tarea a obtener.
   */
  obtenerTareaPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  /**
   * Crea una nueva tarea.
   * @param tarea - Objeto con los datos de la tarea.
   */
  crearTarea(tarea: { titulo: string; descripcion: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, tarea);
  }

  /**
   * Actualiza una tarea existente por su ID.
   * @param id - ID de la tarea a actualizar.
   * @param tarea - Objeto con los nuevos datos de la tarea.
   */
  editarTarea(id: number, tarea: { titulo: string; descripcion: string }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, tarea);
  }

  /**
   * Elimina una tarea existente por su ID.
   * @param id - ID de la tarea a eliminar.
   */
  eliminarTarea(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
