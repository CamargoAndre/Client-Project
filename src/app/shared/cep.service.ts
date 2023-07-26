import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from './models/endereco-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private serverUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) { }


  getEndercoByCep(cep: string): Observable<Endereco>{
    return this.http.get<Endereco>(`${this.serverUrl}/${cep}/json/`)
  }
}
