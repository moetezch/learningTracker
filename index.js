const express=require('express')
const passport=require('passport')
const mongoose=require('mongoose')
const coookieSession=require('cookie-session')
const keys=require('./config/keys')
const bodyParser = require('body-parser')

require('./models/User')
require('./models/Session')
require('./models/Category')
require('./models/Project')
require('./services/passport')

mongoose.Promise=global.Promise
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
const app=express()
app.use(bodyParser.json())
app.use(coookieSession({
  maxAge:30 *24 *60 *60 *1000,
  keys:[keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

require("./routes/authRoutes")(app)
require("./routes/sessionRoutes")(app)

if (process.env.NODE_ENV==='production') {
  app.use(express.static('client/build'))
  const path=require('path')
  app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

const PORT=process.env.PORT|| 5000
app.listen(PORT)