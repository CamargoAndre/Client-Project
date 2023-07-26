import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../shared/models/cliente-model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private serverUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.serverUrl);
  }

  getClientById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.serverUrl}/${id}`)
  }
}
