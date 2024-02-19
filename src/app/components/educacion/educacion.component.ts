import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../model/educacion';
import { SEducacion } from '../../service/s-educacion';
import { TokenService } from '../../service/token-service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent implements OnInit{
  edu: Educacion[]=[];

  constructor(private educacionS: SEducacion, private tokenService: TokenService){}

  isLogged= false;
  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarEducacion():void{
    this.educacionS.lista().subscribe(data=>{
      this.edu = data;
    })
  }

  delete(id?: number){
    if(id!= undefined){
      this.educacionS.delete(id).subscribe(data=>{
        this.cargarEducacion();
      }, err=>{
        alert("NO se pudo eliminar la eduacion");
      })
    }
  }
}
