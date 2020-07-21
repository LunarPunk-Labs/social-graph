
import { NgModule } from '@angular/core';
import { ContentRoutingModule } from './content-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
//import { UserListComponent } from './home/userlist/userlist.component';
import { PersonaListComponent } from './home/personalist/personalist.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from "./profile/profile.component";



@NgModule({
  declarations: [
    HomeComponent,
    //UserListComponent,
    PersonaListComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContentRoutingModule
  ],
  providers: []
})
export class ContentModule {}
