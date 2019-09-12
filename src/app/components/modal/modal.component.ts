import { Component, OnInit, ViewChild} from '@angular/core';
import { BibliotecaServiceService } from 'src/app/services/biblioteca-service.service';
import {BookModel} from '../../models/book.model';
import {FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms'
import {Location} from '@angular/common'
import {HttpClient,} from '@angular/common/http'

import Swal from 'sweetalert2';


interface htmlInputEvent extends Event{
 target:HTMLInputElement& EventTarget   
}


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  book:BookModel = new BookModel();
  userForm:FormGroup;
  userImageFile:File;

 

  @ViewChild('img') user_image;
  
  constructor(private bibliotecaService:BibliotecaServiceService,
              private formBuilder:FormBuilder,
              private http:HttpClient) {

            this.userForm = this.formBuilder.group({
              'editorial' : ['', Validators.required],
              'idioma' : ['', Validators.required],
              'autor' : ['', Validators.required],
              'link' : ['', Validators.required],
              'descripcion' : ['', Validators.required],
              'img' : ['', Validators.required]
          });

        

   }

  ngOnInit() {
    
  }

  ngSubmit(value){
    console.log(value);

    const formData = new FormData();

      formData.append('editorial',value.editorial);
      formData.append('idioma',value.idioma);
      formData.append('autor',value.autor);
      formData.append('link',value.link);
      formData.append('descripcion',value.descripcion);
      formData.append('img',this.userImageFile);  

      Swal.fire({
        title:"espere",
        text:"guardando información",
        type:"info",
        allowOutsideClick:false
      });
      Swal.isLoading();
      this.bibliotecaService.uploadFile(formData).subscribe((data:any) =>{
        Swal.fire({
          title: `Se agrego el Libro: ${data.editorial}`,
          text:"se agregó  correctamente",
          type:"success"
  
        });
        location.reload();
      }, err =>{
          console.log(err);
      })
    


  }

 


  onFoto(event : htmlInputEvent){
    if(event.target.files && event.target.files[0]){
      this.userImageFile = event.target.files[0]
    }

    console.log(this.userImageFile);
  }



  }

