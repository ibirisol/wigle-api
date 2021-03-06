var wigle = require('./index.js');

var client = wigle.createClient(
    'username',
    'password',
    function(err){
        // optional callback that fires only once the login request has returned
        if (err) {
            // login failed
        } else {
            // login succeeded
        }
    }
);

var parameters = {
    longrange1: -87.627769,
    longrange2: -87.624421,
    latrange1: 41.879462,
    latrange2: 41.882034,
    simple: true,
    variance: 0.010,
    ssid: 'linksys'
};

client.query(parameters, function(err, result) {
	  
      if (err) throw err;

	  console.log('Timestamp:', result.timestamp);
	  console.log('Number of networks found:', result.networks.length);
	  // console.log('Networks:', result.networks);
});
