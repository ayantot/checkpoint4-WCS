import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceComponent } from './price/price.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';

const routes: Routes = [
  {path: 'price', component: PriceComponent, pathMatch:"full"},
  {path: 'contact', component: ContactComponent, pathMatch:"full"},
  {path: 'media', component: MediaComponent, pathMatch:"full"},
  {path: 'homepage', component: HomepageComponent, pathMatch:"full"},
  {path: 'authenticate', component: AuthenticateComponent, pathMatch:'full'},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
