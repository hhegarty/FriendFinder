// Pull in required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {
	// console.log('___ENTER htmlRoutes.js___');

	// Home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../Public/home.html'));
	});

	// Survey page
	app.get('/survery', function(req, res) {
		res.sendFile(path.join(__dirname, '../Public/survery.html'));
	});
};