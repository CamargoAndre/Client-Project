import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    AddClienteComponent,
    ListClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ClienteModule { }
