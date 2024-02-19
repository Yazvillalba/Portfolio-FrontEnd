import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../model/educacion';
import { SEducacion } from '../../service/s-educacion';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrl: './edit-educacion.component.css'
})
export class EditEducacionComponent implements OnInit  {


  educacion: Educacion = null;

  constructor(private sEducacion: SEducacion, private activateRouter: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(data => {
      this.educacion = data;
    }, err => {
      alert("Error al modificar la educacion");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];

    this.sEducacion.update(id, this.educacion)
    .subscribe(
    {
      next: data =>{
        this.router.navigate(['']);
      }, error: err=>{
        alert("Error al modificar la educacion");
        this.router.navigate(['']);  
      }
    });
  }

}
