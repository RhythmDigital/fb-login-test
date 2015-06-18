define(["project/FBManager"],
	function(FBManager){

		function AppManager()
		{
			console.log("AppManager initialised");

			this.fbManager = new FBManager();
		}

		var p = AppManager.prototype;


		// Return the base class constructor.
		return( AppManager );
	}
);