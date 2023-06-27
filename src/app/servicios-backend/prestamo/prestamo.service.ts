import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;

  URL_GET_PRESTAMO = this.PATH_BACKEND + "/api/Prestamo"
  URL_GET_BY_ID_PRESTAMO = this.PATH_BACKEND + "/api/Prestamo/GetPrestamoById"
  URL_ADD_PRESTAMO = this.PATH_BACKEND + "/api/Prestamo/AddPrestamo"
  URL_UPDATE_PRESTAMO = this.PATH_BACKEND + "/api/Prestamo/UpdatePrestamo"
  URL_DELETE_PRESTAMO = this.PATH_BACKEND + "/api/Prestamo/DeletePrestamo"
  URL_GET_USUARIO = this.PATH_BACKEND + "/api/Usuario"
  URL_GET_LIBRO = this.PATH_BACKEND + "/api/Libro"

  constructor(private http: HttpClient) { }

  public GetPrestamo(): Observable<HttpResponse<any>> {

    return this.http
      .get<any>(this.URL_GET_PRESTAMO,
        { observe: 'response' })
      .pipe();
  }

  public GetUsuario(): Observable<HttpResponse<any>> {

    return this.http
      .get<any>(this.URL_GET_USUARIO,
        { observe: 'response' })
      .pipe();
  }

  public GetLibro(): Observable<HttpResponse<any>> {

    return this.http
      .get<any>(this.URL_GET_LIBRO,
        { observe: 'response' })
      .pipe();
  }

  public AddPrestamo(entidad): Observable<HttpResponse<any>> {

    return this.http
      .post<any>(this.URL_ADD_PRESTAMO, entidad,
        { observe: 'response' })
      .pipe();
  }

  public UpdatePrestamo(entidad): Observable<HttpResponse<any>> {

    return this.http
      .post<any>(this.URL_UPDATE_PRESTAMO, entidad,
        { observe: 'response' })
      .pipe();
  }

  public DeletePrestamo(item): Observable<HttpResponse<any>> {
  
    let params = new HttpParams();
    params = params.set('id', item.id);

    return this.http
      .post<any>(this.URL_DELETE_PRESTAMO,  "", {params: params, observe: 'response' })
      .pipe();
  }
}
