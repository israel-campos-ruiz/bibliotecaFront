import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { LibroComponent } from './components/libro/libro.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:  'buscar',component: BuscarComponent},
  {path:  'buscar/:texto',component: BuscarComponent},
  {path : 'libro/:id', component:LibroComponent},
  {path: 'nosotros', component:NosotrosComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
