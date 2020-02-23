const routes = require('next-routes')();
routes
.add('/trustfunds/new','/trustfunds/new')
.add('/trustfunds/:address','/trustfunds/show')//using : for wildcard address in url
.add('/trustfunds/:address/requests','/trustfunds/requests/index')
.add('/trustfunds/:address/requests/new','/trustfunds/requests/new');
module.exports = routes;
