import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from '../../service/s-experiencia.service';
import { TokenService } from '../../service/token-service';
import { Experiencia } from '../../model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent implements OnInit{
  exp: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService){}
  isLogged = false;
  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{ 
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.exp = data})
  }

  delete(id?: number){
    if(id!=undefined){
      this.sExperiencia.delete(id).subscribe(data=>{
        this.cargarExperiencia();
      },err=>{
        alert("No se pudo eliminar la experiencia");
      })
    }
  }
}

