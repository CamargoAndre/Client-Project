import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/shared/models/cliente-model';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss'],
})

export class ListClienteComponent {
  ELEMENT_DATA: Cliente[] = [
    {
      id: 1,
      nome: 'Joao',
      sobrenome: 'Nonato',
      sexo: 'masculino',
      cpf:'33322211150',
      dataNascimento: new Date('1980-04-23T10:00:00.000'),
      telefone: '11996212225',
      cep: '04011060',
      logradouro:'Rua Funlano',
      numero: 300,
      bairro: 'Vila Nova',
      localidade: 'São Paulo',
      estado: 'SP'
    },
    {
      id: 2,
      nome: 'Maria',
      sobrenome: 'Da Paz',
      sexo: 'Feminino',
      cpf:'33322211150',
      dataNascimento: new Date('1980-04-23T10:00:00.000'),
      telefone: '1130333525',
      cep: '04011060',
      logradouro:'Rua Funlano',
      numero: 300,
      bairro: 'Vila Nova',
      localidade: 'São Paulo',
      estado: 'SP'
    },
    {
      id: 3,
      nome: 'Andre',
      sobrenome: 'Camargo',
      sexo: 'masculino',
      cpf:'33322211150',
      dataNascimento: new Date('1980-04-23T10:00:00.000'),
      telefone: '11996212225',
      cep: '04011060',
      logradouro:'Rua Funlano',
      numero: 300,
      bairro: 'Vila Nova',
      localidade: 'São Paulo',
      estado: 'SP'
    },

  ];
  displayedColumns = ['id', 'nome', 'sobrenome', 'telefone', 'actions'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}






