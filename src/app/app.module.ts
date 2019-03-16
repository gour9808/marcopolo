import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MarcoPoloService } from './marco-polo.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [MarcoPoloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
