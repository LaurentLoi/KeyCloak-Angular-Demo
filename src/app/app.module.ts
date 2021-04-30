import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import {NavBarModule} from './modules/nav-bar/nav-bar.module';
import { IndexComponent } from './root/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    IndexComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavBarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
