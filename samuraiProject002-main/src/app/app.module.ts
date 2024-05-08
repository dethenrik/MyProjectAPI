import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './components/AdminPage/admin-page/admin-page.component';
import { TopNavComponent } from './components/Topnav/top-nav/top-nav.component';
import { CreateSamuraiComponent } from './components/CreateSamurai/create-samurai/create-samurai.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    TopNavComponent,
    CreateSamuraiComponent,
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
