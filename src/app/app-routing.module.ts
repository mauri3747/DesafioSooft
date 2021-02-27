import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorredoresComponent } from './corredores/corredores.component';

const routes: Routes = [

  {path:'home', component: CorredoresComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
