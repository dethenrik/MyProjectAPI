import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamuraiComponent } from './components/samurai/samurai.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeaponComponent } from './components/weapon/weapon.component';
import { Samurai2Component } from './components/samurai2/samurai2.component';
import { ClanComponent } from './components/clan/clan.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SamuraiComponent,
    WeaponComponent,
    Samurai2Component,
    ClanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
