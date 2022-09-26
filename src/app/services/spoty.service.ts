import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotyService {

  uri:string = "https://api.spotify.com/v1/artists/0U7iI0Dk4Ojvi17nZboNO4/top-tracks?market=US";

  token:string="Bearer BQDbATVbDTj5Nx-0uF44mQ3ibV1DNR1YZWlgLj9Sa77D9XXO6WF4atTojaUgU08zdawOKKYwi4OD3Sl8oUwBICR2s9-JZpTM3RLKZcomZzGIMXXyaiSEeP0Gr2fS5iVvyzrrEwzUxm8pL4P5Qh6CjV70AhWHyVKJ121HJog6W9FwhTnZqEEyKG2lGLJoT1k";



  constructor(public peticIon : HttpClient) { }

  public traerCanciones():Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: this.token
      })
    };

    return this.peticIon.get(this.uri,httpOptions);
  }
}
