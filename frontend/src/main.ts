import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Componente raíz de la aplicación
import { provideHttpClient } from '@angular/common/http'; // Para HTTP
import { provideRouter } from '@angular/router'; // Si estás usando enrutador
import { routes } from './app/app.routes'; // Definir rutas si es necesario

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Para proporcionar HttpClient
    provideRouter(routes), // Si usas enrutador, agregar rutas aquí
  ],
}).catch((err) => console.error(err)); // Manejo de errores
