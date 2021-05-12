import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {catchError, mergeMap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this.authService.getToken().pipe(
      mergeMap((token) => {
        request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});

        return next.handle(request).pipe(
          catchError((error) => {
            if (error.error.status === 403) {
              this.router.navigate(['/unauthorized']).then();
            }
            return throwError(error.error.message);
          })
        );
      })
    );
  }
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}
];
