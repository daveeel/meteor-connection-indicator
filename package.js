Package.describe({
    summary: "Banner / Sweetalert that displays when meteor server is disconnected with countdown and reconnect option",
    name: "daveeel:connection-indicator",
    version: "0.4.3",
    git: "https://github.com/daveeel/meteor-connection-indicator.git"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@0.9.0");
	api.use([
  	    'deps',
  	    'templating',
  	    'session',
        'dessix:livescript-compiler',
        'dalgard:jade',
        'raix:handlebar-helpers',
        'kevohagan:sweetalert'
      ]
	  , 'client');

    api.add_files([
          'client/banner.css',
          'client/banner.jade',
          'client/banner.js',
          'client/alert.ls',
        ]
      , 'client');
});
