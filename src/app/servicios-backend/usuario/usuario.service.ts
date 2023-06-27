import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;

  URL_GET_USUARIO = this.PATH_BACKEND + "/api/Usuario"
  URL_GET_BY_ID_USUARIO = this.PATH_BACKEND + "/api/Usuario/GetUsuarioById"
  URL_ADD_USUARIO = this.PATH_BACKEND + "/api/Usuario/AddUsuario"
  URL_UPDATE_USUARIO = this.PATH_BACKEND + "/api/Usuario/UpdateUsuario"
  URL_DELETE_USUARIO = this.PATH_BACKEND + "/api/Usuario/DeleteUsuario"

  constructor(private http: HttpClient) { }

  public GetUsuario(): Observable<HttpResponse<any>> {

    return this.http
      .get<any>(this.URL_GET_USUARIO,
        { observe: 'response' })
      .pipe();
  }

  public AddUsuario(entidad): Observable<HttpResponse<any>> {

    return this.http
      .post<any>(this.URL_ADD_USUARIO, entidad,
        { observe: 'response' })
      .pipe();
  }

  public UpdateUsuario(entidad): Observable<HttpResponse<any>> {

    return this.http
      .post<any>(this.URL_UPDATE_USUARIO, entidad,
        { observe: 'response' })
      .pipe();
  }

  public DeleteUsuario(item): Observable<HttpResponse<any>> {
  
    let params = new HttpParams();
    params = params.set('id', item.id);

    return this.http
      .post<any>(this.URL_DELETE_USUARIO,  "", {params: params, observe: 'response' })
      .pipe();
  }
  
}
