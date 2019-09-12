import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'
import { BibliotecaServiceService } from 'src/app/services/biblioteca-service.service';
import { BookModel } from 'src/app/models/book.model';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libro:BookModel

  constructor( private activatedRoute: ActivatedRoute,private bibliotecaService : BibliotecaServiceService ) { 
    this.activatedRoute.params.subscribe(parametros => {
    
      this.bibliotecaService.getBookById(parametros['id']).subscribe(libro =>{
        console.log(libro);

        this.libro = libro;

      })
      
    })
  }

  ngOnInit() {
  }

}
