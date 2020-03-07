const express = require('express')
const cors =  require('cors')
const twilio = require('twilio')

// const accountSid = 'ACf12fdfab2fc4080f8d8b5d5397471297'
const accountSid = 'ACf1385b86eb536dfbfe568763fe02a9c7'
// const authToken = '55dbf19364aeeb83de3273fd6b9b5c87'
const authToken = 'f44fe358f11c4ad8011900a0a253dc69'

const client = new twilio(accountSid, authToken)

const app =  express()


// cors
app.use(cors())


//
app.get('/', (req, res) => {
  res.send('hello world')
})

//twillio
app.get('/send_text', (req, res) => {
  const { recipent, textmessage } = req.query

  //send text
  client.messages.create({
    body: textmessage,
    to: recipent,
    from: 'whatsapp:+14155238886' //from twillio
  })
  .then(msg => console.log(msg.body))
  .catch(err => console.log(err))
})


const PORT = process.env.PORT || 4000

app.listen(PORT, console.log(`running on ${ PORT }`) )

// client.messages.create({
//   from: 'whatsapp:+14155238886',
//   to: 'whatsapp:+919124404747',
//   body: 'Hello world'
// }).then(msg => console.log(msg.sid))