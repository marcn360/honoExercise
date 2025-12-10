import { Exclude} from "class-transformer"


export class SerializedQuizDto {
  id: number
  type: string
  question: string
  @Exclude()
  answers: Array<string>
  choices: Array<string>

  constructor(id: number, type: string, question: string,answers: Array<string>, choices: Array<string>) {
    this.id = id
    this.type = type
    this.question = question
    this.answers= answers
    this.choices =choices
  }
}