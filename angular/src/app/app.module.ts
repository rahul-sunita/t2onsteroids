import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component/app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CbuttonComponent } from './cbutton/cbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CbuttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
