define(["project/FBManager"],
	function(FBManager){

		function AppManager()
		{
			console.log("AppManager initialised");

			this.fbManager = new FBManager();

			$("#login-button").on("click", this.fbManager.login.bind(this.fbManager));
			$("#logout-button").on("click", this.fbManager.logout.bind(this.fbManager));

			$("#get-me-button").on("click", this.callAPI.bind(this.fbManager));

			$(this.fbManager).on(FBManager.prototype.USER_LOGGED_IN, this.showApp.bind(this));
			$(this.fbManager).on(FBManager.prototype.USER_LOGGED_OUT, this.hideApp.bind(this));
		}

		var p = AppManager.prototype;


		p.showApp = function()
		{
			$(".app-display").css("display", "block");
		}

		p.hideApp = function()
		{
			$(".app-display").css("display", "none");
		}

		p.callAPI = function()
		{
			FB.api('/me', function(response) {
				console.log(response);
			});
		}


		// Return the base class constructor.
		return( AppManager );
	}
);