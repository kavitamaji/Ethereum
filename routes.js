const routes = require('next-routes')();
routes
.add('/trustfunds/new','/trustfunds/new')
.add('/trustfunds/:address','/trustfunds/show');//using : for wildcard address in url
module.exports = routes;
