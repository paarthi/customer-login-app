import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/resgister/register.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthResolver } from './shared/resolver/auth-resolver';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [
    AuthResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
