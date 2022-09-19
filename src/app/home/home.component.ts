import { Component } from '@angular/core';
import {Integrantes} from '../interfaces/integrantes'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor() { }

  integrantes : Integrantes[]=[
    {"nombre" : "Nate dellizotti",
     "foto" : "https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/nate%20delizzotti.png?alt=media&token=9ba96ada-7a94-4297-abad-2dd6bc5a9224"
    },
    {"nombre" : "Campbell Burns",
     "foto" : "https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/Campbell%20Burns.jpg?alt=media&token=e1527bf0-37c1-48f9-869a-ec6a41e56c46"
    },
    {"nombre" : "Jospeh van lier",
     "foto" : "https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/jospeh%20van%20lier.jpg?alt=media&token=636ee9f2-6ff2-4135-a6db-71f3753a9d38"
    },
    {"nombre" : "Jake Johnson",
     "foto" : "https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/Jake%20Johnson.jfif?alt=media&token=6b890dc2-10c0-4ea3-a35f-5d1814ca863f"
    },

  ]

}
