import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { BuscaCepComponent } from './busca-cep/busca-cep.component';

const routes: Routes = [
  { path: '', component: ToDoComponent },
  { path: 'lista', component: ToDoComponent },
  { path: 'busca-cep', component: BuscaCepComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
