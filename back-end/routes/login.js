const express = require('express');
const router = express.Router();

router.post('/', (request, response, next) => {
	let { username, password }  = request.body;

	if (username && password && username === password) {
	  response.json({
	      id: 1,
	      accessToken: "token"
	  });
	} else {
		console.log('No authorization found, send 401.');
		response.send(401);
		response.json({
	      id: 1,
				errorMessage: 'Please check the error'
	  });
	}
});

module.exports = router;
