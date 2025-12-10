import { QuizDto } from "./Dtos/quiz.dto";
import { QuizAnswerDto } from "./Dtos/quizAnswer.dto";

export function quizService(sentData: QuizAnswerDto[], quizData: QuizDto[]) {
  let quiz = quizData
  let attempt = sentData
  let score = 0
  let check
  if (attempt.length > quiz.length) return 'please recheck sent resource'
  
  check = attempt.map(attemptValue => {
    let attemptAnswers = []
    let quizAnswers = []

    for (const quizAnswer of quiz[attemptValue.id - 1].answers) {
      quizAnswers.push(quizAnswer.answer.toLowerCase().replace(/\s/g, ''))
    }
    for (const attempt of attemptValue.answers) {
      attemptAnswers.push(attempt.answer.toLowerCase().replace(/\s/g, ''))
    }


    return attemptAnswers.every(value => {
      const index = quizAnswers.findIndex(item => item == value)
      if (index !== -1) {
        quizAnswers.splice(index + 1, 1)
        delete quiz[attemptValue.id - 1]
        return true
      }
    })
  })
  check.forEach(value => {
    if (value) score++
  })

  return score 
}