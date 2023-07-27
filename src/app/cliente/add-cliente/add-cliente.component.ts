import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/shared/models/cliente-model';
import { ClienteService } from '../cliente.service';
import { CepService } from 'src/app/shared/cep.service';
import { Endereco } from 'src/app/shared/models/endereco-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss']
})

export class AddClienteComponent implements OnInit{

  formClient = new FormGroup({
    nome: new FormControl('', Validators.required),
    sobrenome: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    dataNascimento: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    logradouro: new FormControl('', Validators.required),
    numero: new FormControl(null, Validators.required),
    bairro: new FormControl('', Validators.required),
    complemento: new FormControl(),
    localidade: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),

  })

  editMode = false;
  selectedClient: Cliente;
  serviceSub = new Subscription();

  constructor(private route: ActivatedRoute,
              private clientService: ClienteService,
              private cepService: CepService,
              private router: Router){}

  ngOnInit(): void {
    this.verifyRoute();
  }

  verifyRoute(): void{
    if(this.route.routeConfig.path.includes("edit")){
      this.editMode = true;
      let clientId = this.route.snapshot.params['id'];
      this.getClientById(clientId);
    }
  }

  getClientById(id: number): void {
    this.serviceSub = this.clientService.getClientById(id).subscribe((resp) => {
      this.fillForm(resp);
    })
  }

  fillForm(client: Cliente): void{

    this.formClient.patchValue({
      nome: client.nome,
      sobrenome: client.sobrenome,
      sexo: client.sexo,
      cpf: client.cpf,
      dataNascimento: client.dataNascimento,
      telefone: client.telefone,
      cep: client.cep,
      logradouro: client.logradouro,
      numero: client.numero,
      bairro: client.bairro,
      complemento: client.complemento,
      localidade: client.localidade,
      estado: client.estado,
    })
  }


  buscarCep(): void {

    let cep = this.formClient.value.cep;

    this.serviceSub = this.cepService.getEndercoByCep(cep).subscribe((resp) => {
      this.formEndereco(resp);
    })
  }

  formEndereco(cep: Endereco): void {

    this.formClient.patchValue({
      logradouro: cep.logradouro,
      bairro: cep.bairro,
      localidade: cep.localidade,
      estado: cep.uf,
    })
  }

  createClient(): void {

    let cliente: Cliente = {
      nome: this.formClient.getRawValue().nome,
      sobrenome: this.formClient.getRawValue().sobrenome,
      sexo: this.formClient.getRawValue().sexo,
      cpf: this.formClient.getRawValue().cpf,
      dataNascimento: this.formClient.getRawValue().dataNascimento,
      telefone: this.formClient.getRawValue().telefone,
      cep: this.formClient.getRawValue().cep,
      logradouro: this.formClient.getRawValue().logradouro,
      numero: this.formClient.getRawValue().numero,
      bairro: this.formClient.getRawValue().bairro,
      complemento: this.formClient.getRawValue().complemento,
      localidade: this.formClient.getRawValue().localidade,
      estado: this.formClient.getRawValue().estado,
    }
    this.serviceSub = this.clientService.postClient(cliente).subscribe()

    alert("Cliente salvo com sucesso!")

    this.router.navigate(['/client/list']);

  }

  updateClient(): void {

    let clientId = this.route.snapshot.params['id'];

    let cliente: Cliente = {
      nome: this.formClient.getRawValue().nome,
      sobrenome: this.formClient.getRawValue().sobrenome,
      sexo: this.formClient.getRawValue().sexo,
      cpf: this.formClient.getRawValue().cpf,
      dataNascimento: this.formClient.getRawValue().dataNascimento,
      telefone: this.formClient.getRawValue().telefone,
      cep: this.formClient.getRawValue().cep,
      logradouro: this.formClient.getRawValue().logradouro,
      numero: this.formClient.getRawValue().numero,
      bairro: this.formClient.getRawValue().bairro,
      complemento: this.formClient.getRawValue().complemento,
      localidade: this.formClient.getRawValue().localidade,
      estado: this.formClient.getRawValue().estado,
    }
    this.serviceSub = this.clientService.putClient(clientId, cliente).subscribe()

    alert("Cliente atualizado com sucesso!")

    this.router.navigate(['/client/list']);

  }


}
