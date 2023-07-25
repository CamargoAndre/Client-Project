import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { DetailClienteComponent } from './detail-cliente/detail-cliente.component';

const routes: Routes = [
  {path: "list", component: ListClienteComponent},
  {path: "add", component: AddClienteComponent},
  {path: "detail/:id", component: DetailClienteComponent},
  {path: "edit/:id" , component:AddClienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
