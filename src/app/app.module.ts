import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import {HttpClientModule} from '@angular/common/http';
import { BookPipe } from './pipes/book.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ModalComponent } from './components/modal/modal.component';
import { LibroComponent } from './components/libro/libro.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component'
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BookPipe,
    CardsComponent,
    FooterComponent,
    BuscarComponent,
    ModalComponent,
    LibroComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
