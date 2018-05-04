const express = require('express');
const router = express.Router();

router.post('/', (request, response, next) => {
	let username  = request.body.username;
	let password  = request.body.password;
console.log(1)

	if (username && password && username === password) {
		console.log(2)
	  response.json([{
	      id: 1,
	      accessToken: "token"
	  }]);
	} else {
		response.setHeader('WWW-Authenticate', 'Basic realm="need login"');
		console.log('No authorization found, send 401.');
		response.send(401);
	}
});

module.exports = router;
