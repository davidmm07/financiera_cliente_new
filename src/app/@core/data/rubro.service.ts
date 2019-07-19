import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { Rubro } from './models/rubro';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

// const rubro: Rubro  = {
//   Id : 1,
//   Organizacion : 1,
//   Codigo : "3-120-100",
//   Descripcion : "Este es un rubro que deberia mostrarse",
//   UnidadEjecutora: 1,
//   Nombre : "Rubro Kronos",
//   RubroPadre : ""
// }

@Injectable({
  providedIn: 'root',
})
export class RubroService {

  constructor(private http: HttpClient) {
  }
  get (endpoint) {
    // return rubro;
    return this.http.get(endpoint);
  }

  post (endpoint, element) {
    return this.http.post(endpoint, element, httpOptions);
  }

  put (endpoint, element , ID) {
    // return this.http.put(path_mid + endpoint + '/' + ID, element, httpOptions);
  }

  delete (endpoint, element) {
    // return this.http.delete(path_mid + endpoint + '/' + element.Id, httpOptions);
  }

}
