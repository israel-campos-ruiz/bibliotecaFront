import { Component, OnInit } from '@angular/core';
import {BibliotecaServiceService} from '../../services/biblioteca-service.service';
import { BookModel } from 'src/app/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  libros:BookModel ;

  constructor(private bibliotecaService : BibliotecaServiceService) { 
    this.bibliotecaService.getAllBooks().subscribe((data:any)=>{
      console.log(data);
      this.libros = data;
    })
  }

  ngOnInit() {
  }

}   
