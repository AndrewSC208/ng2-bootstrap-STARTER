import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* APP ROOT */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

/* SHARED COMPONENTS */
import { MainNavComponent } from './shared/main-nav/main-nav.component';

/* FEATURE MODULES */
import { HomeModule } from './home/home.module';

/* ROUTER */
import { Ng2BoostrapSTARTERRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    HomeModule,
    Ng2BoostrapSTARTERRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
