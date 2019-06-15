import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GENERAL } from '../app-config';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorManager } from './errorManager'

@Injectable({
  providedIn: 'root',
})
export class RequestManager {
    private path: string;
    public httpOptions: any;
  constructor(private http: HttpClient, private errManager: HttpErrorManager) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      }),
    }
  }

  
  setPath(service : string) {
    this.path = GENERAL.ENTORNO[service]
  }
  

  get(endpoint, params) {
    let queryParams = new HttpParams();
    for (let [key, value] of Object.entries(params)) {  
      queryParams.append(key, value + '');
    }
   
    this.httpOptions.params = queryParams;
    return this.http.get(`${this.path}${endpoint}`, this.httpOptions).pipe(
      catchError(this.errManager.handleError.bind(this)),
    );
  }

  post(endpoint, element) {
    return this.http.post(`${this.path}${endpoint}`, element, this.httpOptions).pipe(
      catchError(this.errManager.handleError),
    );
  }

  put(endpoint, element) {
    return this.http.put(`${this.path}${endpoint}` + '/' + element.Id, element, this.httpOptions).pipe(
      catchError(this.errManager.handleError),
    );
  }

  delete(endpoint, id) {
    return this.http.delete(`${this.path}${endpoint}/${id}`, this.httpOptions).pipe(
      catchError(this.errManager.handleError),
    );
  }
};