import { IsNotEmpty, IsString } from "class-validator"

export class AnswerDto {
  answer: string

  constructor(answer: string) {
    this.answer = answer
  }
}