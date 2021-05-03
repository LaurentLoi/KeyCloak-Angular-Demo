import {KeycloakOptions, KeycloakService} from 'keycloak-angular';
import {environment} from '../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  const options: KeycloakOptions = {
    config: environment.keycloakConfig,
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: false
    },
    enableBearerInterceptor: true,
    bearerPrefix: 'Bearer',
    bearerExcludedUrls: [
      '/assets',
      '/clients/public']
  };
  return (): Promise<any> => keycloak.init(options);
}
