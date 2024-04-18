import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CachorroService } from '../services/cachorro.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // cachorros = [
  //   {id: 123, nome: 'Guida', imagemUrl: '', texto: ''},
  //   {id: 123, nome: 'Guida', imagemUrl: '', texto: ''},
  //   {id: 123, nome: 'Guida', imagemUrl: '', texto: ''},
  //   {id: 123, nome: 'Guida', imagemUrl: '', texto: ''}
  // ]

  cachorros$: Observable<any>

  constructor(
    private cachorroService: CachorroService
  ){
    this.getCachorrosServidor()
  }

  getCachorrosServidor(){
    this.cachorros$ = this.cachorroService.getAllCachorrosByUser(1)
  }

}
