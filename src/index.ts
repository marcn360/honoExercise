import { Hono } from 'hono'
import data from './quiz.json' with { type: 'json' };
import { plainToClass } from 'class-transformer';
import { SerializedQuizDto } from './Dtos/serializedQuiz.dto';
import { zValidator } from '@hono/zod-validator';
import { AnswersSchema } from './schemas/quizAnswer.schema';
import { quizService } from './service';
import { cors } from 'hono/cors'

const app = new Hono()

app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['X-Custom-Header', 'Content-Type', 'Authorization']
  })
)

app.get('/api/quiz', (c) => {
  const Data = data.map(value => {
    return plainToClass(SerializedQuizDto, value)
  })
  return c.json(Data)
})

app.post('/api/grade', zValidator('json', AnswersSchema), async (c) => {
  const quizzes = [...data]
  const sentData = await c.req.json()
  // return c.json(sentData)

  return c.json(quizService(sentData, quizzes))
})
export default app
