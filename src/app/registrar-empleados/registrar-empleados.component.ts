import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-empleados',
  templateUrl: './registrar-empleados.component.html',
  styleUrls: ['./registrar-empleados.component.css']
})
export class RegistrarEmpleadosComponent implements OnInit {
  descripcion:string ="aaaa";
  empleado: Empleado = new Empleado();
  constructor(private empleadoServicio: EmpleadoService, private toastr: ToastrService,
     private router: Router,private snackbar: MatSnackBar ){}

  ngOnInit(): void {
      
  }

  guardarEmpleado(){
    // this.empleado.codigo = parseInt(this.empleado.codigo.toString());
    console.log(JSON.stringify(this.empleado));
    if(this.empleado.codigo !== undefined){
      this.empleadoServicio.post(this.empleado).subscribe( dato => {
        // console.log(dato);
       if(dato) {
           this.showSuccess();
        // alert(dato ? "El registro fue exitos": "algo fallo")
         this.irAlaListaDeEmpleados();
       }
     }, error => {
       this.toastr.error(error.error.message, 'Error',{
         timeOut: 5000,
       });
      // console.log(JSON.stringify(error))
     })
    }else {
      this.toastr.warning('¡Llena los campos requeridos!', 'Cuidado',{
        timeOut: 3000,
      });
    }

  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['empleados']);
  }

  onSubmit(){
    this.guardarEmpleado()
  }

  showSuccess() {
    this.toastr.success('¡Notificación exitosa!', 'Éxito',{
      timeOut: 3000,
    });
  }

  mostrarAlerta() {
// "snack-success"
// "snack-error"
// private showSnackBar(text: string, classType: string){
//   this._snackBar.open(text, 'Close', {
//     duration: 5000,
//     panelClass:["snack", classType]
//   })
// }
    this.snackbar.open('El registro fue exitos!', 'Cerrar', {
      duration: 5000,  // Duración en milisegundos
      //panelClass:["snack", "snack-success"]
      panelClass: ['custom-snackbar']
    });
  }
}
