define([],
		function( ){

			function FBManager()
			{
				console.log("FBManager init");
				this.initFB();

				return( this );
			}

			var p = FBManager.prototype;

			p.USER_LOGGED_IN = "USER_LOGGED_IN";
			p.USER_LOGGED_OUT = "USER_LOGGED_OUT";


			p.initFB = function()
			{
				window.fbAsyncInit = (function()
				{
					FB.init({
						appId      : '1615596932051252',
						cookie     : true,  // enable cookies to allow the server to access
											// the session
						xfbml      : true,  // parse social plugins on this page
						version    : 'v2.3' // use version 2.2
					});

					// Now that we've initialized the JavaScript SDK, we call
					// FB.getLoginStatus().  This function gets the state of the
					// person visiting this page and can return one of three states to
					// the callback you provide.  They can be:
					//
					// 1. Logged into your app ('connected')
					// 2. Logged into Facebook, but not your app ('not_authorized')
					// 3. Not logged into Facebook and can't tell if they are logged into
					//    your app or not.
					//
					// These three cases are handled in the callback function.

					this.checkLoginState();

				}).bind(this);

				// Load the SDK asynchronously
				(function(d, s, id) {
					var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s); js.id = id;
					js.src = "//connect.facebook.net/en_US/sdk.js";
					fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));
			}

			p.login = function()
			{
				FB.login(this.statusChangeCallback.bind(this));
			}

			p.logout = function()
			{
				FB.logout(this.statusChangeCallback.bind(this));
			}


			// This is called with the results from from FB.getLoginStatus().
			p.statusChangeCallback = function(response)
			{
				console.log('statusChangeCallback');
				console.log(response);

				// The response object is returned with a status field that lets the
				// app know the current login status of the person.
				// Full docs on the response object can be found in the documentation
				// for FB.getLoginStatus().

				if (response.status === 'connected')
				{
					// Logged into your app and Facebook.
					this.testAPI();
				}
				else if (response.status === 'not_authorized') {
					// The person is logged into Facebook, but not your app.
					document.getElementById('status').innerHTML = 'Please log ' + 'into this app.';
				}
				else {
					// The person is not logged into Facebook, so we're not sure if
					// they are logged into this app or not.
					document.getElementById('status').innerHTML = 'Please log ' + 'into Facebook.';
					$(this).trigger(FBManager.prototype.USER_LOGGED_OUT);
				}
			}


			// This function is called when someone finishes with the Login
			// Button.  See the onlogin handler attached to it in the sample
			// code below.
			p.checkLoginState = function()
			{
				FB.getLoginStatus((function(response)
				{
					this.statusChangeCallback(response);
				}
				).bind(this));
			}

			// Here we run a very simple test of the Graph API after login is
			// successful.  See statusChangeCallback() for when this call is made.
			p.testAPI = function()
			{
				console.log('Welcome!  Fetching your information.... ');
				FB.api('/me', this.onSuccessfulLogin.bind(this));
			}

			p.onSuccessfulLogin = function(response)
			{
				console.log('Successful login for: ' + response.name);
				document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';

				$(this).trigger(FBManager.prototype.USER_LOGGED_IN);
			}

			// Return the base class constructor.
			return( FBManager );
		}
);








