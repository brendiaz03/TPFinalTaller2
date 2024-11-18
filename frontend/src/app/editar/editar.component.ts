//import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})

export class EditarComponent {
  constructor(
    public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any //Recibe los datos del modal
  )
 {}

 saveChanges():void{
  this.dialogRef.close(this.data);
 }

 cancel():void{
  this.dialogRef.close;
 }

}
