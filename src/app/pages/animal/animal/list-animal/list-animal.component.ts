import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/Animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-list-animal',
  templateUrl: './list-animal.component.html',
  styleUrls: ['./list-animal.component.css'],
})
export class ListAnimalComponent implements OnInit {
  animais: Animal[]
  animaisFiltrados: Animal[]
  animaisFiltradosHTML: Animal[];
  filtroRegistroValue : any;
  filtros: {filtroPlantel: boolean, filtroClassificacao: boolean, filtroRegistro: boolean}
  tipos = ['Sem Registro', 'Aguardando', 'Provisório', 'Denifitivo', 'Receptora']
  filteredC: any;
  filteredR: boolean;
  constructor(private service: AnimalService, private router: Router) {}
  ngOnInit(): void {
    this.filteredR = false
    this.filtros = {filtroPlantel: false, filtroClassificacao: false, filtroRegistro: false}
    this.service.listar().then(doc => {
      this.animais = doc as Animal[];
      this.animaisFiltrados = this.animais;
      this.animaisFiltradosHTML = this.animais;
      // this.animaisRegistro = 
    })
  }

  adicionar(){
    this.service.animal = new Animal()
    this.router.navigate(['form-animal']);
  }

  delete(animal: Animal){
    this.service.remover(animal);
    this.ngOnInit()
  }

  edit(animal: Animal){
    this.service.animal = animal;
    this.router.navigate(['form-animal'])
  }
  
  resumo(animal : Animal){
    this.service.animal = animal;
    this.router.navigate(['resumo-animal'])
  }
  
  resumoCrescimento(animal : Animal){
    this.service.animal = animal;
    this.router.navigate(['resumo-crescimento'])
  }

  resumoCusto(animal: Animal){
    this.service.animal = animal;
    this.router.navigate(['resumo-custo-animal'])
  }
 
  filtrar(paramC?: string, paramR?: string){  
    if(this.filtros.filtroClassificacao && paramC){
      this.filteredC ? this.animaisFiltrados = this.animais: '';
      this.animaisFiltrados = this.animaisFiltrados.filter(animal => {
        if(animal.classificacao) {
          return (animal.classificacao.toLowerCase().indexOf(paramC.toLowerCase())> -1)
        }else{
          return false 
        }
      })
      
      this.filtros.filtroPlantel && !this.filtros.filtroRegistro && !this.filtros.filtroClassificacao ? this.animaisFiltrados = this.animaisFiltrados.filter(animal => {
        return animal.dataEntrada
      }) : ''
      !this.filtros.filtroPlantel && this.filtros.filtroRegistro && !this.filtros.filtroClassificacao ? this.animaisFiltrados = this.animaisFiltrados.filter(animal => {
        return animal.registroAssociacao.tipo == paramR;
      }) : ''
      this.filtros.filtroPlantel && this.filtros.filtroRegistro && !this.filtros.filtroClassificacao ? this.animaisFiltrados = this.animaisFiltrados.filter(animal => {
        return animal.dataEntrada
      }) : ''
      this.filteredC = true;
    }
    if(!this.filtros.filtroPlantel && !this.filtros.filtroClassificacao && !this.filtros.filtroRegistro){
      console.log('s')
      this.limparFiltro()
    }
    if(this.filtros.filtroRegistro){
      this.filteredR ? this.animaisFiltrados = this.animais: '';
      this.animaisFiltrados = this.animaisFiltrados.filter(animal => {
        return animal.registroAssociacao.tipo == paramR;
      })
      this.filteredR = true
    }
    
    if(this.filtros.filtroPlantel){
      this.animaisFiltrados = this.animaisFiltrados.filter(animal => {
        return animal.dataEntrada
      })
    }
    this.animaisFiltradosHTML = this.animaisFiltrados;
  }

  filtrarPlantel(){ 
    this.filtros.filtroPlantel = !this.filtros.filtroPlantel;
    this.filtrar();
  }

  filtrarClassificacao(evt){
    this.filtros.filtroClassificacao = true;
    this.filtrar(evt.srcElement.value);
    evt.srcElement.value == '' ? this.limparFiltro() : '';
    this.filtros.filtroClassificacao = false;
  }

  filtrarRegistro(registro: string){
    this.filtros.filtroRegistro = true;
    this.filtrar(undefined, registro);
    this.filtros.filtroRegistro = false;

  }
  
  limparFiltro(){
    this.filteredR = false;
    this.filteredC = false;
    this.filtros = {filtroPlantel: false, filtroClassificacao: false, filtroRegistro: false};
    this.filtroRegistroValue = '';
    this.animaisFiltrados = this.animais;
    this.animaisFiltradosHTML = this.animais;
  }

}
