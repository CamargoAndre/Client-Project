import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/shared/models/cliente-model';

@Component({
  selector: 'app-detail-cliente',
  templateUrl: './detail-cliente.component.html',
  styleUrls: ['./detail-cliente.component.scss']
})
export class DetailClienteComponent implements OnInit{

  id: number;
  nome: string;
  sobrenome: string;
  sexo: string;
  cpf: string;
  dataNascimento: Date;
  telefone: string;
  cep: string;
  logradouro: string;
  numero: number;
  bairro: string;
  localidade: string;
  estado: string;
  complemento?: string;




  serviceSub = new Subscription();


  constructor(private route: ActivatedRoute, private service: ClienteService){}

  ngOnInit(): void {

    let clientId = this.route.snapshot.params['id'];
    this.getClientById(clientId);

  }


  getClientById(id : number): void {
    this.serviceSub = this.service.getClientById(id).subscribe((resp) => {
      this.dataClient(resp);
    })
  }

  dataClient(cliente: Cliente): void {
    this.id = cliente.id;
    this.nome = cliente.nome;
    this.sobrenome = cliente.sobrenome;
    this.sexo = cliente.sexo;
    this.cpf = cliente.cpf;
    this.dataNascimento = cliente.dataNascimento;
    this.telefone = cliente.telefone;
    this.cep = cliente.cep;
    this.logradouro = cliente.logradouro;
    this.numero = cliente.numero;
    this.complemento = cliente.complemento;
    this.bairro = cliente.bairro;
    this.localidade = cliente.localidade;
    this.estado = cliente.estado;
  }

  editCpf(cpf: string): string{
    let cpfModify = `${cpf.substring(0,3)}.${cpf.substring(3,6)}.${cpf.substring(6,9)}-${cpf.substring(9,11)}`;
    return cpfModify;
  }

  editTelefone(fone: string): string{
    let foneModify = `(${fone.substring(0,2)}) ${fone.substring(2,3)} ${fone.substring(3,7)}-${fone.substring(7,11)}`
    return foneModify;
  }

  dataEdit(data: Date): string{

    let dateString = data.toString();
    return dateString;
  }


}
