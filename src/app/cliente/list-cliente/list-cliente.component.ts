import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Cliente } from 'src/app/shared/models/cliente-model';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})





export class ListClienteComponent {
  dataSource: Cliente[] = [
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
    }
  ];


  columnsToDisplay = ['id', 'nome', 'sobrenome', 'telefone', 'actions'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Cliente | null;
}






