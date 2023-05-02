# First I have two router:

- index.js for signing document using ( private / public ) key security
- users.js for opening the document using Time-based One-Time Password ( TOTP ).  I use this to generate code in a short period of time to reduce the amount of storage space in database.

## The first one : For Time-based One-Time Password ( TOTP ):

- at first the user click to get the document to sign the `"/users/getDocument"` and we generate a one time code and we send it using twilio api in sms
- last step we verify if the code is valid or not we send true or false in the frontend based on this value we decide if the document will appear or not. `"/users/verify_code"`

## The second one : For private/public key I used "crypto" a known module in nodeJS:

- at first the frontend call the first api `"/generate_key"` to generate key pair
- second we sign the document using private key. `"/sign"`
- last we verify if the user who sign the document is the one who want. `"/verify"`
