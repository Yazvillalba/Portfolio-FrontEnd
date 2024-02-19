import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from '../../service/s-experiencia.service';
import { Router } from '@angular/router'; 
import { Experiencia } from '../../model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrl: './new-experiencia.component.css'
})
export class NewExperienciaComponent implements OnInit{

  nombreE: string  = '';
  descripcionE: string = '';
  selectedFile: File;
  formData: FormData = new FormData();
  constructor(private sExperiencia: SExperienciaService, private router: Router){}
  ngOnInit(): void {
  }

  
  onFileSelected(event: any) {
    const files: FileList | undefined = event.target.files;
    if (files && files.length > 0) {
        this.selectedFile = files[0];
        // Hacer lo necesario con el archivo seleccionado
        console.log(this.selectedFile);
    } else {
        console.log("Ningún archivo seleccionado.");
    }
}


  onCreate():void{
    if (!this.selectedFile) {
      console.log("Ningún archivo seleccionado.");
      return;
    }

    const imgR = this.guardarDatosImagen();
    const name = this.selectedFile.name;
    
    // const imgR = this.guardarDatosImagen();
    // const name= this.selectedFile.name
    const exp = new Experiencia(this.nombreE, this.descripcionE, name);
    this.sExperiencia.save(exp).subscribe(data => {
      alert("experiencia agregada");
      this.router.navigate(['']);
    }, err=>{
      alert("fallo");
      this.router.navigate(['']);
    });
  }
  guardarDatosImagen():boolean{
    let imgR = false;
    if(this.selectedFile){
      imgR = true;
      this.formData.delete('nombre');
      this.formData.delete('file');
      this.formData.append('nombre', this.getFileNameWithoutExtension(this.selectedFile.name))
      this.formData.append('file', this.selectedFile);
    }
    return imgR;
  }
  private getFileNameWithoutExtension(fileName:string):string{
    return fileName.split('.')[0];
  }
}
