import { Injectable } from '@angular/core';

import { Moeda } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private moedas: Moeda[];

  constructor() { }

  private moedasObj = [ // http://fixer.io
    
    {"sigla": "AUD", "descricao": "Dólar australiano" },
    {"sigla": "BRL", "descricao": "Real brasileiro" },
    {"sigla": "CAD", "descricao": "Dólar Canadense" },
    {"sigla": "EUR", "descricao": "Euro" },
  ];  

  listarTodas(): Moeda[] {
    if (this.moedas) {
      return this.moedas;
    }

    this.moedas = [];

    for (let moedaObj of this.moedasObj) {
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }

    return this.moedas;
  }
  
}
