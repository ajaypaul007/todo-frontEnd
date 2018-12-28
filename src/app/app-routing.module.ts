import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoUpdateComponent } from './todo-update/todo-update.component';

const routes: Routes = [

  {path:'', component: LoginComponent },
  {path:'login', component: LoginComponent },
  {path:'welcome/:username', component: WelcomeComponent, canActivate: [RouteGuardService] },
  {path:'todolist', component: TodoComponent, canActivate: [RouteGuardService] },
  {path:'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  {path:'todo/:id', component: TodoUpdateComponent, canActivate: [RouteGuardService] },
  {path:'**', component: ErrorComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})


export class AppRoutingModule { }
