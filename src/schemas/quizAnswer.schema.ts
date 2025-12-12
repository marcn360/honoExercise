import z from "zod";

const AnswerSchema = z.object({
  answer:z.string()
})

const QuizAnswerSchema = z.object({
  id: z.number().int().positive(),
  answers: z.nullish(z.array(AnswerSchema).min(1))
})

export const AnswersSchema= z.object({
  answers:  z.array(QuizAnswerSchema).min(1)
})

// export const BatchQuizAnswersSchema = z.array(QuizAnswerSchema).min(1)

export type Answers= z.infer<typeof AnswersSchema>

// export type BatchQuizAnswer = z.infer<typeof BatchQuizAnswersSchema>