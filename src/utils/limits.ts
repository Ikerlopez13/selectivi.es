const LIMIT_KEY = 'questions_answered_today'
const DATE_KEY = 'last_answered_date'
const MAX_QUESTIONS = 30
const PROMPT_INTERVAL = 6

function isClient() {
  return typeof window !== 'undefined'
}

function getTodayStr() {
  return new Date().toISOString().slice(0, 10) // YYYY-MM-DD
}

export function getQuestionsCountToday(): number {
  if (!isClient()) return 0
  
  const lastDate = localStorage.getItem(DATE_KEY)
  const today = getTodayStr()
  
  if (lastDate !== today) {
    localStorage.setItem(DATE_KEY, today)
    localStorage.setItem(LIMIT_KEY, '0')
    return 0
  }
  
  const count = localStorage.getItem(LIMIT_KEY)
  return count ? parseInt(count, 10) : 0
}

export function incrementQuestionsCount(): number {
  if (!isClient()) return 0
  
  const currentCount = getQuestionsCountToday()
  const newCount = currentCount + 1
  localStorage.setItem(LIMIT_KEY, newCount.toString())
  return newCount
}

export function hasReachedLimit(): boolean {
  return getQuestionsCountToday() >= MAX_QUESTIONS
}

export function shouldPromptPremium(): boolean {
  const count = getQuestionsCountToday()
  return count > 0 && count % PROMPT_INTERVAL === 0
}
