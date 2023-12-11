import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadosComponent } from './registrar-empleados/registrar-empleados.component';
import { ActualizarEmpeladoComponent } from './actualizar-empelado/actualizar-empelado.component';
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { CardComponetComponent } from './card-componet/card-componet.component';

const routes: Routes = [
  {path : 'empleados',component:ListaEmpleadosComponent},
  {path:'',redirectTo:'empleados',pathMatch:'full'},
  {path : 'registrar-empleado', component : RegistrarEmpleadosComponent},
  {path : 'actualizar-empelado/:id', component : ActualizarEmpeladoComponent},
  {path : 'empleado-detalles/:id', component : EmpleadoDetalleComponent},
  {path : 'catalogo-empleado', component : AgendarCitaComponent},
  {path : 'app-card-componet', component : CardComponetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
