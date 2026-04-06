import { Subject } from './types'

export const englishES: Subject = {
  id: 'english',
  name: 'Inglés',
  topics: [
    {
      id: 'grammar-mastery',
      title: 'Grammar & Use of English (B2-C1 Mastery)',
      questions: [
        { id: 'eng-q1', tier: 'standard', prompt: 'I would rather you ___ any more noise.', options: [{ id: 'a', label: 'didn\'t make', isCorrect: true }, { id: 'b', label: 'don\'t make', isCorrect: false }, { id: 'c', label: 'haven\'t made', isCorrect: false }, { id: 'd', label: 'won\'t make', isCorrect: false }], explanation: 'Wishes/preferences about other people.' }
      ]
    },
    {
      id: 'advanced-ebau-block',
      title: 'Advanced Selectividad Exam Prep',
      questions: [
        { id: 'eng-ebau-q1', tier: 'premium', prompt: 'No sooner ___ the house than it started to pour with rain.', options: [{ id: 'a', label: 'had I left', isCorrect: true }, { id: 'b', label: 'I left', isCorrect: false }, { id: 'c', label: 'did I left', isCorrect: false }, { id: 'd', label: 'I have left', isCorrect: false }], explanation: 'Inversion structures.' }
      ]
    }
  ]
}
