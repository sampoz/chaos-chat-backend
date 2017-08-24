const express = require('express')
const app = express()

let users = [{'nick':'pena', 'uuid':'99eb7400-60c3-4ef1-860d-a00863910bcf'}]
let bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/user', function (req, res) {
  res.send(users)
})

app.post('/user', function (req, res) {
    console.log(req.body)
    if(req.body) {
	let user = req.body
	console.log(user.nick)
	if(user.nick.length > 0) {
	    users.push(user)
	}
    }
    res.send("ok")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
