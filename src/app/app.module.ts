import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { HomeComponent } from './home/home.component';

// Must export the config
export const firebaseConfig = {
    apiKey: 'AIzaSyCsZs-FV6dAUvYQ8p3u6Wwb2ZHKJugN4lk',
    authDomain: 'contacts-5a750.firebaseapp.com',
    databaseURL: 'https://contacts-5a750.firebaseio.com',
    storageBucket: 'contacts-5a750.appspot.com'
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
