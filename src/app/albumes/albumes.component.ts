import { Component} from '@angular/core';
import { SpotyService } from '../services/spoty.service'

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent {

  canciones:any[]=[]

  constructor(public peticion:SpotyService) { 

    this.peticion.traerCanciones()
    .subscribe(respuesta=>
      {
        console.log(respuesta)
        this.canciones=respuesta.tracks

      })
  }
  


}
