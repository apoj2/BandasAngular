import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumesComponent } from './albumes/albumes.component';
import { HomeComponent } from './home/home.component'
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { HistoriaComponent } from './historia/historia.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'integrantes',component:IntegrantesComponent},
  {path:'albumes',component:AlbumesComponent},
  {path:'history',component:HistoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
