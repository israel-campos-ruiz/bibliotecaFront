import { Component, OnInit } from '@angular/core';
import { BibliotecaServiceService } from 'src/app/services/biblioteca-service.service';
import { BookModel } from 'src/app/models/book.model';
import { Router, ActivatedRoute } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  libros: BookModel[] = [];
  buscar: string
  book: BookModel
  pageActual = 1;
  constructor(private bibliotecaService: BibliotecaServiceService,
              private router: Router, private activatedRoute:ActivatedRoute) {
    this.bibliotecaService.getAllBooks().subscribe((data: any) => {
      this.libros = data
      console.log(this.libros);
    })

    this.activatedRoute.params.subscribe( parametros =>{
        this.buscar = parametros['texto'];
        this.buscarL();
    })

  }

  ngOnInit() {

  }

  buscarL() {
    if (this.buscar.length == 0) {
      return
    }

    this.bibliotecaService.searchBook(this.buscar).subscribe(res => {

      if (res.length === 0) {
        Swal.fire({
          title: 'no se encontraron resultados',
          type: 'error'
        })
      } else {
        console.log(res);
        this.libros = res;
      }
    })


  }

  consultarLibro(id: string) {
    this.router.navigate(['/libro', id]);
  }

  borrarLibro(_id: string, i: number, editorial: string) {


    Swal.fire({
      title: `¿Desea este eliminar este  libro?`,
      type: "question",
      showCancelButton: true,
      showConfirmButton: true

    }).then(resp => {
      if (resp.value) {
        this.libros.splice(i, 1);
        this.bibliotecaService.deleteBook(_id).subscribe();

      }
    }).catch(err => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Algo salió mal'
      })
    });
  }


  // actualizarLibro(_id:string){
  //   this.bibliotecaService.getBookById(_id).subscribe(res => {

  //     console.log(res)
  //   })


  // }
}