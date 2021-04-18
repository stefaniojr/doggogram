import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'doggogram';

  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyAIFEFNfD1AOmpl0mdl35C39rdkyzIpar0",
      authDomain: "doggogram-api.firebaseapp.com",
      databaseURL: "https://doggogram-api.firebaseio.com",
      projectId: "doggogram-api",
      storageBucket: "doggogram-api.appspot.com",
      messagingSenderId: "574666719082",
      appId: "1:574666719082:web:e96325eb428918995a2f13",
      measurementId: "G-TC9TZRZLDY"
    };

    firebase.initializeApp(firebaseConfig)
  }
}
