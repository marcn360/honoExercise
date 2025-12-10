import { Exclude} from "class-transformer"
import { AnswerDto } from "./answer.dto"
import { ChoiceDto } from "./choice.dto"


export class QuizDto {
  id: number
  type: string
  question: string
  answers: Array<AnswerDto>
  choices: Array<ChoiceDto>

  constructor(id: number, type: string, question: string,answers: Array<AnswerDto>, choices: Array<ChoiceDto>) {
    this.id = id
    this.type = type
    this.question = question
    this.answers= answers
    this.choices =choices
  }
}