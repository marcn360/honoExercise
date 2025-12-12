import { QuizAnswerDto } from "./quizAnswer.dto";

export class AnswersDto {
  answers: QuizAnswerDto[] 

  constructor(answers: QuizAnswerDto[]) {
    this.answers = answers
  }
}