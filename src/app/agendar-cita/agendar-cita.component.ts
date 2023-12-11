import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'catalogo-empleado',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent  implements OnInit {
  public empleado: Empleado[];
  public empleadoModal = new Empleado();
  terminoBusqueda: string;
  van=false;
  vanEditClave=false;

  constructor(private empleadoServicio: EmpleadoService, private toastr: ToastrService,
    private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllEmpleaoyes();
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
    this.van=true;
    this.vanEditClave=true;
    this.empleadoServicio.findByCodigo(id).subscribe(dato => {
      dato.fecha_nacimiento = dato.fecha_nacimiento.toString().slice(0,10);
      console.log(dato);
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
      duration: 5000, 
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
    this.vanEditClave=false;
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
}

  