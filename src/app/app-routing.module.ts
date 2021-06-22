import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormEstadoCuentaComponent } from './components/form-estado-cuenta/form-estado-cuenta.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: FormEstadoCuentaComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
