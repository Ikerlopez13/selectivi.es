export type QuestionTier = 'standard' | 'premium'

export type QuestionOption = {
  id: string
  label: string
  isCorrect: boolean
}

export type Question = {
  id: string
  tier: QuestionTier
  prompt: string
  options: QuestionOption[]
  explanation: string
}

export type QuestionWithSubject = Question & {
  subjectId: string
  subjectName: string
}

export type Topic = {
  id: string
  title: string
  questions: Question[]
}

export type Subject = {
  id: string
  name: string
  topics: Topic[]
}



