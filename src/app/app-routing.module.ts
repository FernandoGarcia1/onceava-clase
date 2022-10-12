import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirtsComponent } from './components/firts/firts.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', 
    redirectTo: 'login'
  },
  {
    path:'login',
    component: FirtsComponent
  },
  {
    path: 'search',
    component: SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
