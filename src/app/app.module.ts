import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpleadosComponent } from './registrar-empleados/registrar-empleados.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpeladoComponent } from './actualizar-empelado/actualizar-empelado.component';
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CardComponetComponent } from './card-componet/card-componet.component';

@NgModule({
  declarations: [	
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadosComponent,
    ActualizarEmpeladoComponent,
    EmpleadoDetalleComponent,
    AgendarCitaComponent,
    CardComponetComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
