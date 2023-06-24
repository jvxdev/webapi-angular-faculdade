import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactFormComponent } from './components/pages/home/contact-form/contact-form.component';
import { HeroComponent } from './components/hero/hero.component';

import { ContatoService } from './contato.service';
import { ContactMessagesComponent } from './components/pages/home/contact-messages/contact-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactFormComponent,
    HeroComponent,
    ContactMessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule, ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
