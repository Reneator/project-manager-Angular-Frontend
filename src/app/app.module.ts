import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ManagerComponent} from './components/manager/manager.component';
import {TechnologyComponent} from './components/technology/technology.component';
import {HttpClientModule} from '@angular/common/http';
import {ProjectDetailsComponent} from './components/project-details/project-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule, MatFormField, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
  MatTreeModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    MatTableModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ManagerComponent],
  exports: [HttpClientModule],
  providers: [],
  bootstrap: [AppComponent, ManagerComponent]
})
export class AppModule {
}
