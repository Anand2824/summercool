import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
{path : '', redirectTo:'home',pathMatch:'full'},
{path :'cart',component:CartComponent},
{path:"home",component:HomeComponent},
{path:"LogIn",component:LogInComponent},
{path:"SignIn",component:SignInComponent},
{path:"help",component:HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
