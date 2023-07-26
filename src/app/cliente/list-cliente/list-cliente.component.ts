import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/shared/models/cliente-model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss'],
})

export class ListClienteComponent implements OnInit{
  ELEMENT_DATA: Cliente[] = [];

  serviceSub = new Subscription();

  displayedColumns = ['id', 'nome', 'sobrenome', 'telefone', 'actions'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(private service: ClienteService){}

  ngOnInit(): void {
      this.serviceSub = this.service.getClients().subscribe((resp) =>{
        console.log(resp);
        this.ELEMENT_DATA = resp;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      })

  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}






