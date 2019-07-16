import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PriceComponent } from './price/price.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PriceComponent,
    MediaComponent,
    ContactComponent,
    AuthenticateComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, HomepageComponent, PriceComponent]
})
export class AppModule { }
