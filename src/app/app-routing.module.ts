import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './principal/contact/contact.component';
import { HomeComponent } from './principal/home/home.component';
import { UserComponent } from './principal/user/user.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"user",component:UserComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
