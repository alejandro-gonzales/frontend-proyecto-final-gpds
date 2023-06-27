import { Component } from '@angular/core';
import { UsuarioService } from '../servicios-backend/usuario/usuario.service';
import { HttpResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listUsuario = [];
  public idUsuario = ""
  public nombreCompleto = ""
  public carnet = ""
  public correo = ""
  public celular = ""
  public swGuardarCambios = false

  constructor(public navCtrl: NavController,
    private usuarioServices: UsuarioService) {
    this.GetUsuario();
  }

  private GetUsuario() {
    this.usuarioServices.GetUsuario().subscribe({
      next: (response: HttpResponse<any>) => {
        this.listUsuario = response.body;
        //console.log(this.listCategoria)
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete - this.GetUsuario()');
      },
    });
  }

  public addUsuario() {
    if (this.nombreCompleto.length > 0 && this.carnet.length > 0 && this.correo.length > 0 && this.celular.length > 0) {
      var entidad = {
        nombreCompleto : this.nombreCompleto,
        carnet : this.carnet,
        correo : this.correo,
        celular : this.celular
      }
      console.log(entidad)
      this.usuarioServices.AddUsuario(entidad).subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response.body)//1
          if(response.body == 1){
            alert("Se agrego el usuario con exito :)");
            this.GetUsuario();//Se actualize el listado
            this.nombreCompleto = "";
            this.carnet = "";
            this.correo = "";
            this.celular = "";
          }else{
            alert("Al agregar el usuario fallo exito :(");
          }
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete - this.addUsuario()');
        },
      });
    }
  }

  public guardarCambios(){
    this.swGuardarCambios = false;
    if (this.nombreCompleto.length > 0 && this.carnet.length > 0 && this.correo.length > 0 && this.celular.length > 0) {
      var entidad = {
        id: this.idUsuario,
        nombreCompleto : this.nombreCompleto,
        carnet : this.carnet,
        correo : this.correo,
        celular : this.celular
      }
      console.log(entidad)
      this.usuarioServices.UpdateUsuario(entidad).subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response.body)//1
          if(response.body == 1){
            alert("Se modifico el usuario con exito :)");
            this.GetUsuario();//Se actualize el listado
            this.idUsuario = "";
            this.nombreCompleto = "";
            this.carnet = "";
            this.correo = "";
            this.celular = "";
          }else{
            alert("Al modificar el usuario fallo exito :(");
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

  public updateUsuario(item){
    console.log(item)
    this.idUsuario = item.id
    this.nombreCompleto = item.nombreCompleto
    this.carnet = item.carnet
    this.correo = item.correo
    this.celular = item.celular
    this.swGuardarCambios = true;
  }

  public deleteUsuario(item){
    console.log(item.id)
    this.usuarioServices.DeleteUsuario(item).subscribe({
      next: (response: HttpResponse<any>) => {
        console.log(response.body)//1
        if(response.body == 1){
          alert("Se elimino la categoria con exito :)");
          this.GetUsuario();//Se actualize el listado
        }else{
          alert("Al eliminar la categoria fallo exito :(");
        }
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete - this.GetUsuario()');
      },
    });
  }
}
