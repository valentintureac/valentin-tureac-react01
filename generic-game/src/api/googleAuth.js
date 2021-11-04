let eventBound = false;

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
    console.log('logged in', GoogleUser);
  } else {
    console.log('not logged in');
  }
};
