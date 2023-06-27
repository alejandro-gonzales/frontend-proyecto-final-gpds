import { Component } from '@angular/core';
import { LibroService } from '../servicios-backend/libro/libro.service';
import { HttpResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public listLibro = [];
  public idLibro = ""
  public titulo = ""
  public autor = ""
  public anio = ""
  public swGuardarCambios = false

  constructor(public navCtrl: NavController,
    private libroServices: LibroService) {
    this.GetLibro();
  }

  private GetLibro() {
    this.libroServices.GetLibro().subscribe({
      next: (response: HttpResponse<any>) => {
        this.listLibro = response.body;
        //console.log(this.listLibro)
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete - this.GetUsuario()');
      },
    });
  }

  public addLibro() {
    if (this.titulo.length > 0 && this.autor.length > 0 && this.anio.length > 0) {
      var entidad = {
        titulo : this.titulo,
        autor : this.autor,
        anio : this.anio
      }
      console.log(entidad)
      this.libroServices.AddLibro(entidad).subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response.body)//1
          if(response.body == 1){
            alert("Se agrego el usuario con exito :)");
            this.GetLibro();//Se actualize el listado
            this.titulo = "";
            this.autor = "";
            this.anio = "";
          }else{
            alert("Al agregar el usuario fallo exito :(");
          }
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete - this.addLibro()');
        },
      });
    }
  }

  public guardarCambios(){
    this.swGuardarCambios = false;
    if (this.titulo.length > 0 && this.autor.length > 0 && this.anio.length > 0) {
      var entidad = {
        id: this.idLibro,
        titulo : this.titulo,
        autor : this.autor,
        anio : this.anio
      }
      console.log(entidad)
      this.libroServices.UpdateLibro(entidad).subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response.body)//1
          if(response.body == 1){
            alert("Se modifico el Libro con exito :)");
            this.GetLibro();//Se actualize el listado
            this.idLibro = "";
            this.titulo = "";
            this.autor = "";
            this.anio = "";
          }else{
            alert("Al modificar el Libro fallo exito :(");
          }
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete - this.guardarCambios()');
        },
      });
    }
  }

  public updateLibro(item){
    console.log(item)
    this.idLibro = item.id
    this.titulo = item.titulo
    this.autor = item.autor
    this.anio = item.anio
    this.swGuardarCambios = true;
  }

  public deleteLibro(item){
    console.log(item.id)
    this.libroServices.DeleteLibro(item).subscribe({
      next: (response: HttpResponse<any>) => {
        console.log(response.body)//1
        if(response.body == 1){
          alert("Se elimino El Libro con exito :)");
          this.GetLibro();//Se actualize el listado
        }else{
          alert("Al eliminar el Libro fallo exito :(");
        }
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete - this.GetLibro()');
      },
    });
  }
}
