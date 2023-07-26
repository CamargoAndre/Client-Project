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


  nome: string;
  sobrenome: string;

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

    this.nome = cliente.nome;
    this.sobrenome = cliente.sobrenome;

  }

}
