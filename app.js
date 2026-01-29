require('newrelic') // MUST be first line

const express = require('express')
const app = express()
const logger = require('./logger')
const newrelic = require('newrelic')

app.use(express.json())

app.get('/', (req, res) => res.send('NR Bank App Helm Full running 🚀'))
app.get('/health', (req, res) => res.json({ status: 'UP' }))
app.get('/accounts', async (req, res) => {
  await new Promise(r => setTimeout(r, 500))
  res.json([{ id: 1, name: 'Prathmesh', balance: 5000 }])
})
app.post('/transfer', (req, res) => {
  const { amount } = req.body
  if (!amount || amount > 10000) throw new Error('Transfer amount exceeds limit!')
  res.json({ status: 'SUCCESS' })
})
app.get('/custom-metric', (req, res) => {
  newrelic.recordMetric('Custom/Bank/BalanceCheck', 1)
  res.json({ metric: 'Recorded' })
})
app.get('/cpu-load', (req, res) => {
  const start = Date.now()
  while (Date.now() - start < 3000) {}
  res.json({ load: 'Done' })
})
app.get('/log', (req, res) => {
  logger.info('User requested /log endpoint')
  res.json({ log: 'Sent' })
})

app.listen(3000, () => console.log('Bank API Helm Full running on port 3000'))
