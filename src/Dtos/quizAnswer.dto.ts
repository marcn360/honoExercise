import { Type } from "class-transformer"
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { AnswerDto } from "./answer.dto"

export class QuizAnswerDto {
  id: number
  answers: AnswerDto[] 

  constructor(id: number, answers: AnswerDto[]) {
    this.id = id
    this.answers = answers
  }
}