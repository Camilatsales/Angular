import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.scss']
})
export class BuscaCepComponent implements OnInit {

  public endereco: Endereco = new Endereco();
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  buscarCep(cep) {
    this.http.get<Endereco>(`http://viacep.com.br/ws/${cep}/json/`)
    .subscribe(
      res=>{
        this.endereco = res;
      },
      err=>{
        console.log(err);
      }
    );
  }
}

class Endereco {
  bairro: string;
  cep: string;
  complemento: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  uf: string;
  unidade: string;
}



