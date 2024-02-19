import { Component, OnInit } from '@angular/core';
import { SEducacion } from '../../service/s-educacion';
import { Router } from '@angular/router';
import { Educacion } from '../../model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrl: './new-educacion.component.css'
})
export class NewEducacionComponent implements OnInit{
  nombreE: string  
  descripcionE: string 


  constructor(private sEducacion: SEducacion, private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  onCreate():void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.sEducacion.save(educacion).subscribe(data => {
      alert("educacion agregada");
      this.router.navigate(['']);
    }, err=>{
      alert("fallo agregar educacion");
      this.router.navigate(['']);
    });
  }
 
}
