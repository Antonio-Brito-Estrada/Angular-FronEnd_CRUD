import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable, take } from 'rxjs';

// const URL:string = 'http://localhost:8090/platzi-market/api/Empleados'
// const URL:string = 'http://localhost:8096/empleados';
const URL:string = 'https://backend-01u3.onrender.com/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {


  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Empleado[]>(URL + '/findAllOrderByCodigo')
    //return this.httpClient.get<Empleado[]>(URL + '/all')
    //return this.httpClient.get<Empleado[]>(URL + '/allOrderByNombre')
  }

  post(Empleado: Empleado){
    return this.httpClient.post<Empleado>(URL + '/save', Empleado)
  }

  put(Empleado: Empleado){
    return this.httpClient.put<Empleado>(URL + `/update`, Empleado).pipe(take(1))
  }

  delete(barCode:number){
    return this.httpClient.delete<Empleado>(URL + `/delete/${barCode}`, {}).pipe(take(1))
  }

  findById(id:number){
    return this.httpClient.get<Empleado>(URL + `/${id}`)
  }

  findByNombre(nomnbre: String){
    return this.httpClient.get<Empleado[]>(URL + `/findByNombre/${nomnbre}`)
  }

  deleteByCodigo(codigo: number){
    return this.httpClient.delete<Empleado>(URL + `/deleteByCodigo/${codigo}`, {}).pipe(take(1))
  }

  findByCodigo(codigo:number){
    return this.httpClient.get<Empleado>(URL +`/findByCodigo/${codigo}`)
  }
}
