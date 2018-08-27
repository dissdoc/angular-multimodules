import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';
import { ValidatorMessageComponent } from './validator-message/validator-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    MaterialModule
  ],
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent, LoginComponent, RegisterComponent, EventsComponent, UsersComponent,
    ValidatorMessageComponent],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
