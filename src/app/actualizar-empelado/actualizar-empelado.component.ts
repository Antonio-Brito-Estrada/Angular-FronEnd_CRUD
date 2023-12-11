import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actualizar-empelado',
  templateUrl: './actualizar-empelado.component.html',
  styleUrls: ['./actualizar-empelado.component.css']
})
export class ActualizarEmpeladoComponent implements OnInit {

  id: number;
  empleadoModal: Empleado = new Empleado();

  constructor(private route: ActivatedRoute, private empleadoServicio: EmpleadoService,
              private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.empleadoModal = new Empleado();
    this.getEmpledoById(this.id);
  }
  
// public getEmpledoById(id: number){
  // alert(this.id);
  public getEmpledoById(id: number){
  this.empleadoServicio.findByCodigo(id).subscribe(dato => {
        dato.fecha_nacimiento = dato.fecha_nacimiento.toString().slice(0,10);
        this.empleadoModal = dato;
  })
}


  actualizarEmpleado() {
    this.empleadoServicio.put(this.empleadoModal).subscribe(dato => {
      console.log(dato);
      if (dato) {
        this.showSuccess();
        this.irAlaListaDeEmpleados();
      }
    }, error => {
      this.toastr.error(error, 'Error', {
        timeOut: 3000,
      });
      console.log(error)
    })
  }

  irAlaListaDeEmpleados() {
    this.router.navigate(['empleados']);
  }

  onSubmit() {
    this.actualizarEmpleado()
  }

  showSuccess() {
    this.toastr.success('¡Actualización exitosa!', 'Éxito', {
      timeOut: 3000,
    });
  }
}
