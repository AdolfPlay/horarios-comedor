import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horario } from '../horarios.model';

@Injectable({
  providedIn: 'root'
})
export class SubirService {

  constructor(private http: HttpClient) { }

  uploadFile(formData){
    let urlApi = 'http://localhost:3000/horario';
    return this.http.post(urlApi, formData);
  }
  getHorarios()
  {
    let urlApi = 'http://localhost:3000/horario';
    return this.http.get<Horario[]>(urlApi);
  }

}
