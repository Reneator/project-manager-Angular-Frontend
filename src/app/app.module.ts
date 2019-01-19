import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { TechnologyComponent } from './technology/technology.component';
import {ProjectService} from './services/project.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
