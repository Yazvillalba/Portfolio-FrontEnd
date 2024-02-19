import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../model/experiencia';
import { SExperienciaService } from '../../service/s-experiencia.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router'; // Correct import for Angular Router


@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrl: './edit-experiencia.component.css'
})
export class EditExperienciaComponent implements OnInit {

  expLaboral: Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activateRouter: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data => {
      this.expLaboral = data;
    }, err => {
      alert("Error al modificar la experiencia");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];

    this.sExperiencia.update(id, this.expLaboral)
    .subscribe(
    {
      next: data =>{
        this.router.navigate(['']);
      }, error: err=>{
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);  
      }
    });
  }
}
