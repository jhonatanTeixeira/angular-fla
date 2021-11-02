import { Component, VERSION } from '@angular/core';
import { Cliente } from './interface/cliente';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public formulario: any = {};

  public cliente: Cliente;

  public cadastrar() {
    this.cliente = new Cliente(
      this.formulario.nome, 
      this.formulario.nascimento
    );

    this.cliente.email = this.formulario.email;

    console.log(this.cliente);
  }
}
