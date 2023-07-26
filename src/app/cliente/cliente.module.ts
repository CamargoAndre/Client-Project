import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DetailClienteComponent } from './detail-cliente/detail-cliente.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';





@NgModule({
  declarations: [
    AddClienteComponent,
    ListClienteComponent,
    DetailClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    SharedModule,
    MatListModule,
    ReactiveFormsModule,
    MatSelectModule,
  ]
})
export class ClienteModule { }
