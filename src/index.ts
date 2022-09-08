import express from 'express'
import diaries from './routes/diario'
const app = express()
app.use(express.json())

const PORT: number = 3001

app.get('/ping', (_req, res) => {
  console.log('Ping is here!')
  res.send('Pong')
})
app.use('/api/diaries', diaries)
app.use('/api/diaries', diaries)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
