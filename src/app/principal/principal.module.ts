import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule
    
  ],
  exports:[
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    UserComponent
  ]
})
export class PrincipalModule { }
