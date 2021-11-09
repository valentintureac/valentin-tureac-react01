import { login, logout } from '../actions/creators/auth';
import store from './../store';

let eventBound = false;
const googleOauthAppId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

if (googleOauthAppId.length === undefined) {
  throw new Error('Google Client ID not found!');
}

// recipe
export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope: 'email profile',
        })
        .then(() => {
          const GoogleAuth = window.gapi.auth2.getAuthInstance();
          const GoogleUser = GoogleAuth.currentUser.get();

          if (!eventBound) {
            GoogleAuth.isSignedIn.listen((isAuthenticated) => {
              authenticationChangeHandler(isAuthenticated, GoogleUser);
            });

            authenticationChangeHandler(
              GoogleAuth.isSignedIn.get(),
              GoogleUser,
            );

            eventBound = true;
          }

          resolve(GoogleAuth);
        });
    });
  });
};

const authenticationChangeHandler = (isAuthenticated, GoogleUser) => {
  if (isAuthenticated) {
    const user = GoogleUser.getBasicProfile();

    console.log('logged in', GoogleUser);
    store.dispatch(login(buildGoogleUserBasicProfile(user)));
  } else {
    console.log('not logged in');
    store.dispatch(logout());
  }
};

const buildGoogleUserBasicProfile = (GoogleUser) => {
  return {
    id: GoogleUser.getId(),
    firstName: GoogleUser.getGivenName(),
    lastName: GoogleUser.getFamilyName(),
    email: GoogleUser.getEmail(),
    avatar: GoogleUser.getImageUrl(),
  };
};
