import { Component } from '@angular/core';
import { PrestamoService } from '../servicios-backend/prestamo/prestamo.service';
import { HttpResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public listPrestamo = [];
  public listUsuario = [];
  public listLibro = [];
  public idPrestamo = ""
  public idUsuario = ""
  public idLibro = ""
  public fechaRetiro = ""
  public fechaDevolucion = ""
  public swGuardarCambios = false

  constructor(public navCtrl: NavController,
    private prestamoServices: PrestamoService) {
    this.GetPrestamo();
    this.GetUsuario();
    this.GetLibro();
  }

  private GetPrestamo() {
    this.prestamoServices.GetPrestamo().subscribe({
      next: (response: HttpResponse<any>) => {
        this.listPrestamo = response.body;
        //console.log(this.listPrestamo)
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete - this.GetPrestamo()');
      },
    });
  }

  private GetUsuario() {
    this.prestamoServices.GetUsuario().subscribe({
      next: (response: HttpResponse<any>) => {
        this.listUsuario = response.body;
        //console.log(this.listUsuario)
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete - this.GetPrestamo()');
      },
    });
  }

  private GetLibro() {
    this.prestamoServices.GetLibro().subscribe({
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

  public addPrestamo() {
    if (this.idUsuario.length > 0 && this.idLibro.length > 0 && this.fechaRetiro.length > 0 && this.fechaDevolucion.length > 0) {
      var entidad = {
        idUsuario : this.idUsuario,
        idLibro : this.idLibro,
        fechaRetiro : this.fechaRetiro,
        fechaDevolucion : this.fechaDevolucion
      }
      console.log(entidad)
      this.prestamoServices.AddPrestamo(entidad).subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response.body)//1
          if(response.body == 1){
            alert("Se agrego el Prestamo con exito :)");
            this.GetPrestamo();//Se actualize el listado
            this.idUsuario = "";
            this.idLibro = "";
            this.fechaRetiro = "";
            this.fechaDevolucion = "";
          }else{
            alert("Al agregar el Prestamo fallo exito :(");
          }
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete - this.addPrestamo()');
        },
      });
    }
  }

  public guardarCambios(){
    this.swGuardarCambios = false;
    if (this.idUsuario.length > 0 && this.idLibro.length > 0 && this.fechaRetiro.length > 0 && this.fechaDevolucion.length > 0) {
      var entidad = {
        id: this.idPrestamo,
        idUsuario : this.idUsuario,
        idLibro : this.idLibro,
        fechaRetiro : this.fechaRetiro,
        fechaDevolucion : this.fechaDevolucion
      }
      console.log(entidad)
      this.prestamoServices.UpdatePrestamo(entidad).subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response.body)//1
          if(response.body == 1){
            alert("Se modifico el Prestamo con exito :)");
            this.GetPrestamo();//Se actualize el listado
            this.idPrestamo = "";
            this.idUsuario = "";
            this.idLibro = "";
            this.fechaRetiro = "";
            this.fechaDevolucion = "";
          }else{
            alert("Al modificar el Prestamo fallo exito :(");
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

  public updatePrestamo(item){
    console.log(item)
    this.idPrestamo = item.id
    this.idUsuario = item.idUsuario + ""
    this.idLibro = item.idLibro + ""
    this.fechaRetiro = item.fechaRetiro
    this.fechaDevolucion = item.fechaDevolucion
    this.swGuardarCambios = true;
  }

  public deletePrestamo(item){
    console.log(item.id)
    this.prestamoServices.DeletePrestamo(item).subscribe({
      next: (response: HttpResponse<any>) => {
        console.log(response.body)//1
        if(response.body == 1){
          alert("Se elimino el Prestamo con exito :)");
          this.GetPrestamo();//Se actualize el listado
        }else{
          alert("Al eliminar el Prestamo fallo exito :(");
        }
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete - this.GetPrestamo()');
      },
    });
  }

}
