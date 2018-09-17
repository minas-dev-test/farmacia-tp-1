interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: '3IIhYJ8mE4UbKHCjCvsUhyuPR7NKixdZ',
    domain: 'vsampaio.auth0.com',
    callbackURL: 'http://localhost:4200/callback'
  };
  