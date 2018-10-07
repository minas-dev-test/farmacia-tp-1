interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: 'FLznvBuz0s2vDXflpiM3McYSukTy43iS',
    domain: 'projeto-farmacia.auth0.com',
    callbackURL: 'http://localhost:4200/callback'
  };
  