import express, { json } from 'express'
import Router from './routes'
import swaggerUi from 'swagger-ui-express'

const app = express()
app.use(express.static('public'))
app.use(json())

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json'
    }
  })
)

app.use(Router)

app.listen(5051, () => console.log('Server is listening on port 5051'))
