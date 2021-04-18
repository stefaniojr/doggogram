import { Component, OnInit } from '@angular/core';
import { Bd } from 'src/app/bd.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.component.html',
  styleUrls: ['./pubs.component.css']
})
export class PubsComponent implements OnInit {

  public email: string
  public publicacoes: any

  constructor(private bd: Bd) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) =>  {
      this.email = user.email
      this.atualizarTimeLine()
    })
  }

  public atualizarTimeLine(): void {

    this.bd.consultaPubs(this.email)
      .then((publicacoes: any) => {
        this.publicacoes = publicacoes
      })
  }
}
