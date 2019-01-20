import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ManagerComponent} from './manager/manager.component';
import {TechnologyComponent} from './technology/technology.component';
import {HttpClientModule} from '@angular/common/http';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
  MatDialog
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    TechnologyComponent,
    ProjectDetailsComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTreeModule
  ],
  exports: [HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
