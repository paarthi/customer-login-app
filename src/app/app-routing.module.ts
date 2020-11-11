import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/resgister/register.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthResolver } from './shared/resolver/auth-resolver';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    resolve: {
      user: AuthResolver
    },
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }, {
    path: 'account/login',
    component: LoginComponent
  }, {
    path: 'account/register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
