import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAppComponent } from './components/logo-app/logo-app.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent} from './components/hys/hys.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import{HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
// import { NuevoUsuarioComponent } from './model/nuevo-usuario/nuevo-usuario.component';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LogoAppComponent,
        RedesSocialesComponent,
        BannerComponent,
        AcercaDeComponent,
        ExperienciaComponent,
        EducacionComponent,
        HysComponent,
        ProyectosComponent,
        HomeComponent,
        FooterComponent,
        LoginComponent,
        NewExperienciaComponent,
        EditExperienciaComponent,
        NewEducacionComponent,
        EditEducacionComponent
        // NuevoUsuarioComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgCircleProgressModule.forRoot({}),
        HttpClientModule,
        FormsModule,
        
    ]
})
export class AppModule { }
