import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition , animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style ({
        opacity: 1
      })),
      transition('void => criado', [
        style({
          opacity: 0, transform: 'translate(-50px, 0)'
        }),
        animate('500ms 0.5s ease-in-out')
      ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({opacity: 0, transform: 'translate(50px, 0)' }),
        animate('1.5s 0s ease-in-out', keyframes ([
          style({ offset: 0.88, opacity: 0.5, transform: 'translateY(-5px)'}),
          style({ offset: 0.90, opacity: 0.5, transform: 'translateY(5px)'}),
          style({ offset: 0.92, opacity: 0.5, transform: 'translateY(-5px)'}),
          style({ offset: 0.94, opacity: 0.5, transform: 'translateY(5px)'}),
          style({ offset: 0.96, opacity: 0.5, transform: 'translateY(-5px)'}),
          style({ offset: 0.98, opacity: 0.5, transform: 'translateY(5px)'}),
         ]))
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado'
  public estadoPainel: string = 'criado'
  public cadastro: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public exibirPainel(event: string): void {
    this.cadastro = event === 'cadastro' ? true : false
  }
}
