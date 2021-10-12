const httpProxy = require('express-http-proxy')
const express = require('express')
const logger = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use('/incidents', httpProxy('http://localhost:3001'))
app.use('/projects', httpProxy('http://localhost:3002'))
app.use('/providers', httpProxy('http://localhost:3003'))
app.use('/reliabilities', httpProxy('http://localhost:3004'))
app.use('/severities', httpProxy('http://localhost:3005'))

app.get('/health-check', (req, res) => {
  res.status(200).send("Doctor said I'm good.")
})

app.listen(process.env.PORT || 3000, () => {
  console.log('API Gateway is ready 🚀');
});
