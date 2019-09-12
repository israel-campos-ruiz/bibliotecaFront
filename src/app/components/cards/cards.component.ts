import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { BibliotecaServiceService } from 'src/app/services/biblioteca-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input('libros') libros:any;
  
  
  constructor( private router:ActivatedRoute,
               private bibliotecaService:BibliotecaServiceService ) {
              this.router.params.subscribe(parametros =>{
                console.log(parametros);
              })
   }

  ngOnInit() {
  }

}
