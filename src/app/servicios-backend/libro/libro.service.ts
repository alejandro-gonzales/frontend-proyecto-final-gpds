import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;

  URL_GET_LIBRO = this.PATH_BACKEND + "/api/Libro"
  URL_GET_BY_ID_LIBRO = this.PATH_BACKEND + "/api/Libro/GetLibroById"
  URL_ADD_LIBRO = this.PATH_BACKEND + "/api/Libro/AddLibro"
  URL_UPDATE_LIBRO = this.PATH_BACKEND + "/api/Libro/UpdateLibro"
  URL_DELETE_LIBRO = this.PATH_BACKEND + "/api/Libro/DeleteLibro"

  constructor(private http: HttpClient) { }

  public GetLibro(): Observable<HttpResponse<any>> {

    return this.http
      .get<any>(this.URL_GET_LIBRO,
        { observe: 'response' })
      .pipe();
  }

  public AddLibro(entidad): Observable<HttpResponse<any>> {

    return this.http
      .post<any>(this.URL_ADD_LIBRO, entidad,
        { observe: 'response' })
      .pipe();
  }

  public UpdateLibro(entidad): Observable<HttpResponse<any>> {

    return this.http
      .post<any>(this.URL_UPDATE_LIBRO, entidad,
        { observe: 'response' })
      .pipe();
  }

  public DeleteLibro(item): Observable<HttpResponse<any>> {
  
    let params = new HttpParams();
    params = params.set('id', item.id);

    return this.http
      .post<any>(this.URL_DELETE_LIBRO,  "", {params: params, observe: 'response' })
      .pipe();
  }
}
