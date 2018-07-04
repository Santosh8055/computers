import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComputersComponent } from './computers/computers.component';
import { AddComputerComponent } from './add-computer/add-computer.component';


const routes: Routes = [
  { path: '', redirectTo: '/computers', pathMatch: 'full' },
  { path: 'computers', component: ComputersComponent },
  { path: 'add', component: AddComputerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
