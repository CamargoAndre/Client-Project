import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "client",
    loadChildren: () => import('./cliente/cliente.module').then((m) => m.ClienteModule),
  },
  { path: '' , redirectTo: '/client/list', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
