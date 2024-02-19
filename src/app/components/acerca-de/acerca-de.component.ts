import { Component, OnInit } from '@angular/core';
import { persona } from '../../model/persona.model';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrl: './acerca-de.component.css'
})
export class AcercaDeComponent implements OnInit{
 persona: persona = new persona("","","");
  constructor(public personaService:  PersonaService){}
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{this.persona = data})
  }

}
