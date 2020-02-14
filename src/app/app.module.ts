import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { AppRoutingModule } from './app-routing.module';
import { AthleteComponent } from './athlete/athlete.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { AthleteService }  from './athlete.service';
import { AuthGuard } from './auth_guards/auth.guards';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PruebaComponent,
    AthleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule    
  ],
  providers: [
    AuthenticationService,
    AthleteService, 
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
