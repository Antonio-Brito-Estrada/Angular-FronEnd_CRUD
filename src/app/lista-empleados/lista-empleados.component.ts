import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  public empleado: Empleado[];
  public empleadoModal = new Empleado();
  terminoBusqueda: string;
  van=false;

  constructor(private empleadoServicio: EmpleadoService, private toastr: ToastrService,
    private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllEmpleaoyes();
    //(input)="handleInput()"
    // this.toastr.success("aaaaa")
    // this.toastr.info("aaaaa")
    // this.toastr.warning("aaaaa")
    // this.toastr.error("aaaaa")
  }

  buscar(nombre: string) {
    if (nombre.length == 0) {
      this.getAllEmpleaoyes();
    } else {
      this.empleadoServicio.findByNombre(nombre).subscribe(
        empleados => this.empleado = empleados,
        error => console.error(error),
        () => {
          // this.showSuccess(); // Manejar la notificación de completado
        }
      );
    }
  }

  actualizarEmpleado2() {
    if(this.empleadoModal.id){
      this.empleadoServicio.put(this.empleadoModal).subscribe(dato => {
        // alert(dato);
        this.van=false;
        if (dato) {
          this.showSuccess();
          this.getAllEmpleaoyes();
        }
      }, error => {
        this.toastr.error(error, 'Error', {
          timeOut: 3000,
        });
        console.log(error)
      })
    }else{
      this.guardarEmpleado();
    }
  }

  showModal(id: number) {
    // alert(id)
    this.van=true;
    this.empleadoServicio.findByCodigo(id).subscribe(dato => {
      // alert(JSON.stringify(dato))
      dato.fecha_nacimiento = this.getFecha(dato.fecha_nacimiento as any);
      this.empleadoModal = dato;
    })
  }

  showSuccess() {
    this.toastr.success('¡Notificación exitosa!', 'Éxito', {
      timeOut: 3000,
    });
  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['actualizar-empelado', id]);
  }

  verDetalle(id: number) {
    this.router.navigate(['empleado-detalles', id]);
  }
  elimar(elemento: number) {
    //alert(elemento);
    this.empleadoServicio.delete(elemento)
      .subscribe({
        next: () => this.mostrarAlerta(),
        error: () => console.warn('Error'),
        complete: () => {
          this.getAllEmpleaoyes();
        }
      })
  }

  private getAllEmpleaoyes() {
    this.empleadoServicio.findAll().subscribe(
      empleados => this.empleado = empleados,
      error => console.error(error)
    );
  }

  mostrarAlerta() {
    this._snackBar.open('Se elimino correctamente!', 'Cerrar', {
      duration: 5000,  // Duración en milisegundos
      //panelClass:["snack", "snack-success"]
      //panelClass: ["custom-snackbar", "snack-success"]
    });
  }

  deleteByCodigo(codigo: number) {
    this.empleadoServicio.deleteByCodigo(codigo)
      .subscribe(()=> {
        console.log("dato: ");
      }, result => {
        if (result.status == 200) {
          this.showSuccess(); 
          this.getAllEmpleaoyes();
        } else {
          this.toastr.error(result.error.message, 'Error', {
            timeOut: 3000,
          });
          console.log(result.status)
        }
      });
  }

  hideForm(){
    this.van = !this.van;
  }

  nuevoRegistro(){
    this.van=true;
    this.empleadoModal = new Empleado();
  }

  guardarEmpleado(){
    if(this.empleadoModal.codigo !== undefined){
      this.empleadoServicio.post(this.empleadoModal).subscribe( dato => {
       if(dato) {
        this.van=false;
         this.showSuccess();
         this.getAllEmpleaoyes();
       }
     }, error => {
      debugger
       this.toastr.error(error.error.message, 'Error',{
         timeOut: 5000,
       });
     })
    }else {
      this.toastr.warning('¡Llena los campos requeridos!', 'Cuidado',{
        timeOut: 3000,
      });
    }
  }

  getFecha(fecha: any){
   // validarla fecha aqui
 let date = new Date(fecha);

 let fechaString =fecha.toString().slice(0,10)
 let day = fechaString.slice(8);
 let year = fechaString.slice(0,4);
 let month = date.getMonth();

  let months = [
    'enero', 'febrero', 'marzo',
    'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre',
    'octubre', 'noviembre', 'diciembre'
  ];

  console.log(month);
  let mes = months[month];
  return ` ${day} - ${mes} - ${year}`;

  }
}
