import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MensajeComponent } from '../mensaje/mensaje.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{

  constructor(private formbuilder: FormBuilder,public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(MensajeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  registroform = this.formbuilder.group({
    nombre: ['', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)]
    }],
    apellido: ['', {
      validators: [
        Validators.required,
        Validators.minLength(2)
      ]
    }],
    email: ["", {
      validators: [
        Validators.required,
        Validators.email,
      ]
    }],
  

  })

  get nombre() { return this.registroform.get('nombre') }
  get apellido() { return this.registroform.get('apellido') }
  get email() { return this.registroform.get('email') }
  

  login() {

  }
  

}
