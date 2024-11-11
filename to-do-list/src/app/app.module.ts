import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ButtonHeaderComponent } from './components/button-header/button-header.component';
import { InputComponent } from './components/input/input/input.component';
import { DialogatualizartaskComponent } from './components/dialogatualizartask/dialogatualizartask.component';
import { HoursPipe } from './pipes/hours.pipe'
import { MaterialModule } from './modules/material/material.module';
import { FormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonHeaderComponent,
    InputComponent,
    DialogatualizartaskComponent,
    HoursPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
