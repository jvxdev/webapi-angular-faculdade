import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from './Contato';

const httpOptions: { readonly headers: HttpHeaders } = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  url = 'https://localhost:7101/api/contato';

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.url);
  }

  Create(contato: Contato) : Observable<any> {
    return this.http.post<Contato>(this.url, contato, httpOptions);
  }
}
