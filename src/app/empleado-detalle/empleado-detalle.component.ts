import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleado-detalle.component.css']
})
export class EmpleadoDetalleComponent implements OnInit {

  id:number;
  empleado: Empleado;
  constructor(private route: ActivatedRoute, private empleadoServicio: EmpleadoService, private router: Router){}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id']
      this.empleado = new Empleado();
      this.empleadoServicio.findByCodigo(this.id).subscribe(dato => {
      // this.empleadoServicio.findById(this.id).subscribe(dato => {
        this.empleado = dato;
      })

  }
  gresar(){
      this.router.navigate(['empleados']);
  }

}
