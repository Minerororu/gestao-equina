import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from 'src/app/models/Animal';
import { ANIMAIS_CL, RESPONSAVEL_CL } from 'src/app/components/constants/constants';
import { Router } from '@angular/router';
import { ControleMovimentoService } from '../../controle-movimento/controle-saida.service';
import { ControleEntrada } from 'src/app/models/ControleEntrada';
import { hoje } from 'src/app/helpers/function';

@Component({
  selector: 'app-form-animal',
  templateUrl: './form-animal.component.html',
  styleUrls: ['./form-animal.component.css'],
})
export class FormAnimalComponent implements OnInit {
  animal: Animal;
  ultimaEdicao: Date;
  venda = false;

  animal_collection = ANIMAIS_CL;
  responsavel_collection = RESPONSAVEL_CL;
  sexos: string[] = ['Macho', 'Fêmea'];
  papeisFem = ['Matriz', 'Doadora', 'Potra', 'Receptora', 'Mula', 'Jumenta'];
  papeisMacho = ['Garanhão', 'Castrado', 'Potro', 'Burro', 'Jumento'];
  temperamentos = ['Calmo', 'Agitado', 'Nervoso'];
  tipos = [
    'Sem Registro',
    'Aguardando',
    'Provisório',
    'Denifitivo',
    'Receptora',
  ];
  metodosConcepcao = [
    'Não Informado',
    'MN-Monta Natural',
    'IA-Inseminação Artificial',
    'Transferência de embrião',
  ];
  opcoesVenda = ['Sim', 'Não', 'Vendido'];

  constructor(
    private service: AnimalService,
    private router: Router,
    private controleService: ControleMovimentoService
  ) {}

  ngOnInit(): void {
    this.animal = this.service.animal ? this.service.animal : new Animal();
    this.service.animal == undefined ? (this.animal.vivo = true) : '';
    this.service?.animal?.exameDna
      ? ''
      : (this.animal.exameDna = {
          dataColeta: null,
          responsavel: null,
          ordem: null,
          resenha: null,
        });
    this.service?.animal?.registroAssociacao
      ? ''
      : (this.animal.registroAssociacao = {
          tipo: null,
          numero: null,
          livro: null,
          numeroChip: null,
          registro: null,
          grauPureza: null,
        });
  }

  set(param: any) {
    param = !param;
  }

  setParam(mudado, param) {
    mudado = param;
  }

  setDadosbasicos() {
    this.animal.ultimaEdicao = hoje();
    let pai = this.animal.pai;
    let mae = this.animal.mae;
    if (!pai?.filhos?.includes(this.animal.nome)) {
      pai?.filhos?.push(this.animal.nome);
    }
    if (!mae?.filhos.includes(this.animal.nome)) {
      mae?.filhos.push(this.animal.nome);
    }
    this.animal.filhos ? '' : (this.animal.filhos = []);
    this.animal.id = this.animal.nome;
    this.service.salvar(this.animal);
    this.service.salvar(pai);
    this.service.salvar(mae);
  }

  criarControleEntrada() {
    let CE: ControleEntrada = new ControleEntrada();
    CE.animal = this.animal?.nome;
    CE.controle = this.animal?.controlCriador;
    CE.registro = this.animal?.registroAssociacao?.numero;
    CE.livro = this.animal?.registroAssociacao?.livro;
    CE.dataNascimento = this.animal?.dataNascimento;
    CE.sexo = this.animal?.sexo;
    CE.pelagem = this.animal?.pelagem;
    CE.data = this.animal.dataEntrada;
    CE.id = this.animal.id;
    this.controleService.salvarEntrada(CE);
  }

  submit() {
    this.setDadosbasicos();
    this.animal.dataEntrada ? this.criarControleEntrada() : '';
    this.router.navigate(['list-animal']);
  }
}
