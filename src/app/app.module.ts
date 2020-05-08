import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// our own library
import {OeLibraryModule} from '../../oe-library/src/lib/oe-library.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    OeLibraryModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
