const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
	let user_id = req.body.username;
    let password = req.body.password;

    console.log(req);
    console.log(password);

    res.json([{
        id: 1,
        accessToken: "token"
    }]);
});

module.exports = router;
