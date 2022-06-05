import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
interface Colonia {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  validadorNumeros = Validators.compose([Validators.pattern(/^[0-9]\d*$/),Validators.required,Validators.minLength(3),Validators.maxLength(3)])
  formRegistrarCliente = this.fb.group({
    nombre: ['',[Validators.required]],
    apellidoPaterno:  ['',[Validators.required,Validators.minLength(3)]],
    apellidoMaterno:  ['',[Validators.required,Validators.maxLength(3)]],
    correo:  ['',[Validators.email, Validators.required]],
    telefono: ['',],
    celular:  [''],
    calle:  [''],
    numeroExterior:  ['',this.validadorNumeros],
    numeroInterior:  ['',this.validadorNumeros],
    codigoPostal:  [''],
    alcaldia:  [''],
    referenciasDomicilio:  ['']
  });
  constructor(private fb: FormBuilder) { }

  registrarCliente() {
    console.log(this.formRegistrarCliente.value);

  }

  getErrorCorreo() {
    if(this.formRegistrarCliente.controls['correo'].hasError('required')) {
      return 'Ingresa un correo necesariamnete'
    }
    return this.formRegistrarCliente.controls['correo'].hasError('email') ? 'No es un correo con formato correcto' : ''
  }



  ngOnInit(): void {
  }
}
