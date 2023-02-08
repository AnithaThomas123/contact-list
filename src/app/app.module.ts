import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, ContactsComponent, FirstComponent],
  imports: [BrowserModule, AppRoutingModule, AccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
