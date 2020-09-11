

var DfmWebPush = {
	DFM_NOTIFICATION_SCOPE: 'dfmNotification',

	subscribing: false,

	getLocalStorageName: function( key ) {
		var DfmNotificationScope = DfmWebPush.DFM_NOTIFICATION_SCOPE;
		var storageName = DfmNotificationScope + '-' + key;
		return storageName;
	},

	addToLocalStorage: function( key, value ) {
		var storageName = DfmWebPush.getLocalStorageName( key );
		window.localStorage.setItem( storageName, JSON.stringify( value ) );
	},

	getFromLocalStorage: function( key ) {
		var storageName = DfmWebPush.getLocalStorageName( key );
		let value = window.localStorage[ storageName ] ? JSON.parse( window.localStorage[ storageName ] ) : undefined;
		return value;
	},

	log: function ( message ) {
		if ( 'true' === webpush_config.debug ) {
			console.log( message );
		}
	},

	checkForCompatibility: function () {
		const swApiAvailable = 'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window;
		const localStorageAvailable = localStorage ? true : false;
		const matchMediaAvailable = matchMedia ? true : false;

		const browserWideEnough = matchMedia( '(max-width: 64.9375em)' ).matches === false;

		// Opera will receive notifications but for some reason it doesn't wake up our Service Worker and send
		// the push event. This makes it unuseable for push notifications.
		const operaBrowserAgent = navigator.userAgent.match(/Opera|OPR\//) ? true : false;
		const operaBrowserUtils = ( window.opr || window.opera ) ? true : false;
		const operaBrowser = operaBrowserAgent || operaBrowserUtils;

		return swApiAvailable && localStorageAvailable && matchMediaAvailable && browserWideEnough && !operaBrowser;
	},

	displayBanner: function() {
		if ( DfmWebPush.getFromLocalStorage( 'HidePrompt' ) !== true ) {
			if ( !document.getElementById( 'web-push-prompt' ) ) {
				setTimeout( DfmWebPush.displayBanner, 100 );
			} else {
				document.getElementById( 'web-push-prompt' ).style.display = 'block';
				if ( dataLayer ) {
					dataLayer.push( {
						"event" : "subscribeNotificationVisible"
					} );
				}
			}
		}
	},

	doRegisterPushPermission: function () {
		messaging.requestPermission().then( function() {
			// Notification permission granted.
			DfmWebPush.addToLocalStorage( 'PermissionGranted', true );
			DfmWebPush.closePushPrompt();
			DfmWebPush.initializeTokenListeners();
			navigator.serviceWorker.ready.then( function( registration ) {
				DfmWebPush.registration = registration;
			} );
		} ).catch( function( err ) {
			// Unable to get permission to notify.
			if ( err.code && err.code === "messaging/permission-blocked" ) {
				// Permissions declined
				DfmWebPush.closePushPrompt();
			}
		} );

		// This prevents the register function from executing many times when
		// the banner is clicked several times. We only need this function to fire
		// once ever for any given user and it will only fire when the banner is
		// clicked.
		DfmWebPush.doRegisterPushPermission = function () {};
	},

	closePushPrompt: function () {
		document.getElementById( 'web-push-prompt' ).style.display = 'none';
		DfmWebPush.addToLocalStorage( 'HidePrompt', true );
		if ( dataLayer ) {
			dataLayer.push( {
				"event" : "subscribeNotificationDismissed",
			} );
		}
	},

	initializePermission: function () {
		// Push prompt has been clicked at some point but we still need to request permission on page load.
		// Also we don't want to request permission when the user declined because that's just wasteful.
		if ( DfmWebPush.getFromLocalStorage( 'PermissionGranted' ) ) {
			messaging.requestPermission().then( function() {
				navigator.serviceWorker.ready.then( function( registration ) {
					DfmWebPush.registration = registration;
				} );
			} );
		}
	},

	initializeTokenListeners: function () {
		// Get the initial token at the time of running this function.
		messaging.getToken().then( function( currentToken ) {
			DfmWebPush.subscribe( currentToken );
		} ).catch( function( err ) {
			console.error( 'Unable to retrieve token: ', err );
		} );

		messaging.onTokenRefresh( function() {
			messaging.getToken().then( function( refreshedToken ) {
				if ( refreshedToken ) {
					// Send Instance ID token to app server.
					DfmWebPush.subscribe( refreshedToken );
				}
			} ).catch( function( err ) {
				console.error('Unable to retrieve refreshed token ', err);
			});
		});
	},

	subscribe: function( token ) {
		var subscribeEndpoint = '/wp-json/dfm-notifications/v1/subscribe/default-topic/' + token;
		if ( !token ) {
			return;
		}
		// User is already subscribed and the token hasn't changed. End function here.
		if ( token && DfmWebPush.getFromLocalStorage( 'UserSubscribed' ) === token ) {
			return;
		}
		if ( ! webpush_config.secret ) {
			return;
		}

		if ( !DfmWebPush.subscribing ) {
			DfmWebPush.subscribing = true;
			// Indicate that the new Instance ID token has not yet been sent to the app server.
			DfmWebPush.addToLocalStorage( 'UserSubscribed', false );
			$.ajax( {
				type: 'POST',
				url: subscribeEndpoint,
				data: JSON.stringify( { secret: webpush_config.secret } ),
				success: function ( data, textStatus ) {
					DfmWebPush.addToLocalStorage( 'UserSubscribed', token );
					DfmWebPush.subscribing = false;
				},
			} );
		}
	}

};

if ( DfmWebPush.checkForCompatibility() ) {
	// Initialize Firebase
	var firebase_config = {
		apiKey:  webpush_config.apiKey,
		projectId: webpush_config.projectId,
		messagingSenderId: webpush_config.messagingSenderId,
	};
	firebase.initializeApp( firebase_config );
	messaging = firebase.messaging();
	navigator.serviceWorker.register( '/service-worker.js' ).then( ( registration ) => {
		messaging.useServiceWorker( registration );
		messaging.usePublicVapidKey( webpush_config.vapidKey );
		DfmWebPush.initializePermission();
		DfmWebPush.initializeTokenListeners();
		DfmWebPush.displayBanner();
	} );
}
