import { Component, OnInit } from '@angular/core';
import { DadosBiometricos } from 'src/app/models/DadosBiometricos';
import { AnimalService } from '../../animal/animal.service';
import { DadosBiometricosService } from '../dados-biometricos.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-resumo-crescimento',
  templateUrl: './resumo-crescimento.component.html',
  styleUrls: ['./resumo-crescimento.component.css'],
})
export class ResumoCrescimentoComponent implements OnInit {
  dados: DadosBiometricos[];
  pesos: any[] = [];
  pesosData: any[] = [];
  alturas: any[] = [];
  alturasData: any[] = [];
  constructor(
    private service: DadosBiometricosService,
    private animalService: AnimalService
  ) {}

  ngOnInit(): void {
    this.service
      .listar(
        [
          {
            key: 'animal.nome',
            op: '==',
            value: this.animalService.animal.nome,
          },
        ],
        ''
      )
      .then((doc) => {
        this.pesos = [];
        this.pesosData = [];
        this.dados = doc as DadosBiometricos[];
        this.dados.map((dado) => {
          if (dado.peso) {
            this.pesos.push(dado.peso);
            this.pesosData.push(dado.data);
          }
          if (dado.cernelha) {
            this.alturas.push(dado.cernelha);
            this.alturasData.push(dado.data);
          }
        });
      })
      .then(() => {
        var myChart = new Chart('myChart1', {
          type: 'line',
          data: {
            labels: this.alturasData,
            datasets: [
              {
                label: 'Altura na Cernelha em cm',
                borderColor: 'rgb(75, 192, 192)',
                data: this.alturas,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        var myChart2 = new Chart('myChart2', {
          type: 'line',
          data: {
            labels: this.pesosData,
            datasets: [
              {
                label: 'Peso em kg',
                borderColor: 'rgb(75, 192, 192)',
                data: this.pesos,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      });
  }
}
