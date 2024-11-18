import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';  
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input'; 

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,  
    MatFormFieldModule,  
    MatInputModule  
  ],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  saveChanges(): void {
    // Lógica para guardar cambios
    this.dialogRef.close(this.data); // Envía los datos actualizados al cerrar
  }
}
