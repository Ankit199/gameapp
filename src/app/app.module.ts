import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ErrorDialogComponent } from './error-dialog/errordialog.component';

import { LoginService } from './services/login.service';
import { ErrorDialogService } from './error-dialog/errordialog.service';

import { HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';

import { FootercComponent } from './UI/footerc/footerc.component';
import { HeadercComponent } from './UI/headerc/headerc.component';
import { DashboardComponent } from './UI/dashboard/dashboard.component';
import { BetpanelComponent } from './UI/dashboard/betpanel/betpanel.component';
import { TournamentpanelComponent } from './UI/dashboard/tournamentpanel/tournamentpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorDialogComponent,
  
    FootercComponent,
    HeadercComponent,
    DashboardComponent,
    BetpanelComponent,
    TournamentpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    ErrorDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
