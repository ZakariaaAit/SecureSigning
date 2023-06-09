var express = require('express');
var router = express.Router();
var crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/generate_key', (req, res, next) => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', { // rsa is an asymmetric encryption ( we mostlikely use it for sensitive informations)
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki', // spki an encoding format for publickey
      format: 'der'
    },
    privateKeyEncoding: {
      type: 'pkcs8', // pkcs8 an encoding format for private keys 
      format: 'der' // der format used for encoding and decoding cryptographic data
    }
  })
  res.send({ publicKey: publicKey.toString('base64'), privateKey: privateKey.toString('base64') })
})

router.post('/sign', (req, res) => {
  let data = req.body.data;
  let privateKey = req.body.privateKey

  privateKey = crypto.createPrivateKey({
    key: Buffer.from(privateKey, 'base64'),
    type: 'pkcs8',
    format: 'der' 
  })

  const sign = crypto.createSign('SHA256') // sha256 is a hash function
  sign.update(data)
  sign.end()
  const signature = sign.sign(privateKey).toString('base64') // we can save signature in our database to keep usersignature

  res.send({ signature })
})

router.post('/verify', (req, res) => {

  let {data, publicKey, signature} = req.body;

  publicKey = crypto.createPublicKey({
    key: Buffer.from(publicKey, 'base64'),
    type: 'spki',
    format: 'der'
  })

  const verify = crypto.createVerify("SHA256")
  verify.update(data)
  verify.end()

  let result = verify.verify(publicKey, Buffer.from(signature, "base64"))
  
  res.send({ verify: result })
})
module.exports = router;
