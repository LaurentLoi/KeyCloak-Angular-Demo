import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RootComponent} from './root/root.component';
import {NavBarModule} from './modules/nav-bar/nav-bar.module';
import {IndexComponent} from './root/index/index.component';
import {initializer} from './AppInit';
import {KeycloakService} from 'keycloak-angular';
import {AuthService} from './modules/keycloak/services/auth.service';
import {ParcoursComponent} from './pages/parcours/parcours.component';
import {E403Component} from './common/errors/e403/e403.component';
import {HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders} from './modules/keycloak/interceptors/http-request.interceptor';
import {KeycloakModule} from './modules/keycloak/keycloak.module';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    IndexComponent,
    ParcoursComponent,
    E403Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavBarModule,
    KeycloakModule
  ],
  providers: [
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    AuthService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
