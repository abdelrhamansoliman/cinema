import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { DetilsComponent } from './detils/detils.component';
import { ContactusComponent } from './contactus/contactus.component'

const appRoutes :Routes =[
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'detils/:id',component:DetilsComponent},
  {path:'contactus',component:ContactusComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    DetilsComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
