import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ANIMAIS_CL, RESPONSAVEL_CL } from 'src/app/components/constants/constants';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Animal } from 'src/app/models/Animal';
import { ControleReproducao, Parto } from 'src/app/models/ControleReproducao';
import { AnimalService } from 'src/app/pages/animal/animal/animal.service';
import { NascimentoService } from '../../nascimentos/nascimentos.service';
import { ControleReproducaoService } from '../controle-controle-reproducao.service';

@Component({
  selector: 'form-controle-reproducao',
  templateUrl: './form-controle-reproducao.component.html',
  styleUrls: ['./form-controle-reproducao.component.css'],
})
export class FormControleReproducaoComponent implements OnInit {
  controle: ControleReproducao;
  animal_collection = ANIMAIS_CL;
  responsavel_collection = RESPONSAVEL_CL;
  partos: Parto[];
  oldParto: Parto;
  situacoes = [
    'Aguardando Confirmação',
    'Em Gestação',
    'Não Confirmada (Falha)',
    'Coleta embrião  Negativada',
    'Embrião Negociado',
    'Embrião Congelado',
    'Aborto',
  ];
  constructor(
    private service: ControleReproducaoService,
    private router: Router,
    private dialog: MatDialog,
    private animalService: AnimalService,
    private nascimentoService: NascimentoService
  ) {}

  ngOnInit(): void {
    this.controle = this.service.controle
      ? this.service.controle
      : new ControleReproducao();
    this.oldParto = JSON.parse(JSON.stringify(this.controle.partos[0]));
    this.controle.transferenciaEmbriao
      ? ''
      : (this.controle.transferenciaEmbriao = {
          responsavel: null,
          receptora: null,
          data: null,
          estado: null,
          anotacoes: null,
        });
    this.partos = this.service?.controle?.partos
      ? this.service?.controle?.partos
      : [];
  }

  adicionarParto() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: {
        title: 'Formulário de Partos',
        formularioParto: true,
        metodoConcepcao: this.controle.metodoConcepcao,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.partos.push(result);
        this.controle.metodoConcepcao = result?.metodoConcepcao;
      }
    });
  }

  editParto() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: {
        title: 'Formulário de Partos',
        formularioParto: true,
        parto: this.partos[0],
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.partos.splice(0, 1, result);
        this.controle.metodoConcepcao = result?.metodoConcepcao;
      }
    });
  }

  deleteParto() {
    this.partos.pop();
  }

  nascerAnimal() {
    let animalParto: Animal;
    let parto = this.partos[0];
    parto.id = this.controle.id;
    animalParto = new Animal();
    animalParto.controlCriador = parto?.numControleCriador;
    animalParto.mae = this.controle?.femea;
    animalParto.pai = this.controle?.macho;
    animalParto.receptora = this.controle?.transferenciaEmbriao?.receptora;
    animalParto.sexo = parto.sexo;
    animalParto.nome = parto.nome;
    animalParto.pelagem = parto.pelagem;
    animalParto.dataNascimento = parto.data;
    animalParto.id = this.controle.id;
    animalParto.sexo == 'Macho' ? (animalParto.categoria = 'Potro') : '';
    animalParto.sexo == 'Fêmea' ? (animalParto.categoria = 'Potra') : '';
    if (!animalParto?.pai?.filhos.includes(animalParto.nome)) {
      animalParto?.pai?.filhos.push(animalParto.nome);
    }
    if (!animalParto?.mae?.filhos.includes(animalParto.nome)) {
      animalParto?.mae?.filhos.push(animalParto.nome);
    }
    this.animalService.salvar(animalParto);
    this.animalService.salvar(animalParto.pai);
    this.animalService.salvar(animalParto.mae);
    this.nascimentoService.salvar(parto);
    alert(`O animal ${animalParto.nome}, foi salvo com sucesso!`);
  }

  submit() {
    this.controle.partos = this.partos;
    this.service.salvar(this.controle);
    let partoMudou = false;
    Object.entries(this.partos[0]).map((parto) => {
      Object.entries(this.oldParto).map((oldParto) => {
        if (parto[0] == oldParto[0] && parto[1] != oldParto[1]) {
          partoMudou = true;
        }
      });
    });
    if (
      !this.partos[0].natimorto &&
      this.partos[0] &&
      this.controle.situacao != 'Aborto' &&
      partoMudou
    ) {
      this.nascerAnimal();
    }
    this.router.navigate(['list-controle-reproducao']);
  }
}
