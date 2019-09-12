import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {pipe} from 'rxjs';
import {tap, map} from 'rxjs/operators'
import {BookModel} from '../models/book.model'
@Injectable({
  providedIn: 'root'
})
export class BibliotecaServiceService {
   url : string = "http://localhost:3000";
   libros:any [] = [];
   private options = { headers: new HttpHeaders().set('content-type','multipart/form-data; boundary') };
  constructor(private http : HttpClient) {
    
  }

  uploadFile(formGroup:any){
    return this.http.post(`${this.url}/libro`,formGroup);
  }

  createBook(book:BookModel){
      return this.http.post(`${this.url}/libro`,book);
  }


  updateBook(book:BookModel){
    return this.http.put(`${this.url}/libro/${book._id}`,book);
  }


  deleteBook(id:string){
    return this.http.delete(`${this.url}/libro/${id}`);
  }

  
  getAllBooks(){
 
    return  this.http.get(`${this.url}/libro`).pipe(
       tap((data:any)=>{

       }))
   }

   getBookById(id:string){
     return this.http.get(`${this.url}/libro/${id}`).pipe(
       tap((data:any)=>{
     
      }
    ))

   }

   searchBook(autor:string){
     let urlSearch = `${this.url}/libro/editorial/${autor}`
     return this.http.get(urlSearch).pipe(
       tap((data:any) =>{
        
        this.libros = data;
         
       }
       
       ))
   }

   

}


/*router.get('/titulo/:libro', (req,res)=>{
    let name = req.params.libro
    Libro.find({"titulo":{$regex:name}}).exec((err,libro) =>{
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            })
        }

        res.json(libro)
    })
})*/ 