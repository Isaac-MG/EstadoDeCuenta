import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-form-estado-cuenta',
  templateUrl: './form-estado-cuenta.component.html',
  styleUrls: ['./form-estado-cuenta.component.css']
})
export class FormEstadoCuentaComponent implements OnInit {
  formCuenta !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {    }


  ngOnInit(): void {
    this.formCuenta = this.formBuilder.group({
      apellido: ['', Validators.required],
      importe: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    })
  }


  consultaCuenta(){
    console.log(this.formCuenta.value);
  }

}
