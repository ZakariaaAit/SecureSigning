var express = require('express');
var router = express.Router();
const { VsAuthenticator } = require('@vs-org/authenticator');
var client = require('../services/sms')
var userCodegen = '' // globale variable to verify if the code sent to user is valid

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
 router.get('/getDocument', (req, res) => {
  const generateCode = VsAuthenticator.generateSecret('zakariaa', 'zakariaa@gmail.com')
  const { base32Secret } = generateCode;
  const userCode = VsAuthenticator.generateTOTP(base32Secret)
  userCodegen = base32Secret

// client.messages
//   .create({
//      body: `this code ${userCode} is secure dont give it to anyone and its available 90 sec please provide it in the empty input to have access to your document`,
//      from: '+212601879091',
//      to: '+212000000000'
//    })
//   .then(message => console.log(message.sid));

  res.send({sms: `this code ${userCode} is secure dont give it to anyone and its available 90 sec please provide it in the empty input to have access to your document`})
 })

 router.post('/verify_code', (req, res) => {

  const code = req.body.code;
  console.log({code, userCodegen});
  const result = VsAuthenticator.verifyTOTP(
    code,
    userCodegen
  )

  res.send({valid: result})
 })

module.exports = router;
