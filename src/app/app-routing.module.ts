import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'pokemon/all', redirectTo: 'pokemon/all', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
