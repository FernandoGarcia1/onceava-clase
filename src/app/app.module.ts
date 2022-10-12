import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirtsComponent } from './components/firts/firts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './libs/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { SecondComponent } from './components/second/second.component';
import { Router, RouterModule } from '@angular/router';
import { ValidatorInterceptor } from './libs/validator.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    FirtsComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ValidatorInterceptor,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
