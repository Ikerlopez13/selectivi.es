'use client'

import { useEffect, useState } from 'react'
import Onboarding from './Onboarding'

export default function OnboardingGate() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const check = () => setShow(typeof window !== 'undefined' && window.location.hash === '#onboarding')
    check()
    window.addEventListener('hashchange', check)
    return () => window.removeEventListener('hashchange', check)
  }, [])

  if (!show) return null
  return <Onboarding />
}


