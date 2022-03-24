import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';

import { FormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { JobService } from './services';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
