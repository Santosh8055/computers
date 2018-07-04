import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComputerComponent } from './computer/computer.component';
import { ComputerGroupComponent } from './computer-group/computer-group.component';
import { RoutingModule } from './/routing.module';
import { ComputersComponent } from './computers/computers.component';
import { AddComputerComponent } from './add-computer/add-computer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputerComponent,
    ComputerGroupComponent,
    ComputersComponent,
    AddComputerComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
