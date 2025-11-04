'use client'

import React from 'react'
import { InlineMath, BlockMath } from 'react-katex'

export default function MathText({ text }: { text: string }) {
  if (!text) return null
  
  const parts = React.useMemo(() => tokenizeMath(text), [text])
  
  return (
    <>
      {parts.map((p, i) => {
        if (p.kind === 'inline') {
          return <InlineMath key={`inline-${i}`} math={p.content} />
        }
        if (p.kind === 'block') {
          return (
            <div key={`block-${i}`} className="my-4 flex justify-center overflow-x-auto">
              <BlockMath math={p.content} />
            </div>
          )
        }
        return <React.Fragment key={`text-${i}`}>{p.content}</React.Fragment>
      })}
    </>
  )
}

type Piece =
  | { kind: 'text'; content: string }
  | { kind: 'inline'; content: string }
  | { kind: 'block'; content: string }

function tokenizeMath(input: string): Piece[] {
  if (!input) return []
  const pieces: Piece[] = []
  let s = input
  let lastIndex = 0
  
  const pushText = (from: number, to: number) => {
    if (to > from) pieces.push({ kind: 'text', content: s.slice(from, to) })
  }

  // Collect all math regions (both block and inline)
  const inlineRegions: { start: number; end: number; content: string; isBlock: boolean }[] = []
  
  // First, find block math $$...$$ or \[...\]
  const blockRegex = /\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g
  let m: RegExpExecArray | null
  while ((m = blockRegex.exec(s)) !== null) {
    const start = m.index
    const end = blockRegex.lastIndex
    const content = m[1] ?? m[2] ?? ''
    inlineRegions.push({ start, end, content, isBlock: true })
  }
  
  // Then find inline math $...$ or \(...\)  
  // Reset regex state
  const inlineRegex = /\$(?!\$)((?:(?!\$)[\s\S])*?)\$|\\\(([\s\S]*?)\\\)/g
  while ((m = inlineRegex.exec(s)) !== null) {
    const start = m.index
    const end = inlineRegex.lastIndex
    const content = m[1] ?? m[2] ?? ''
    // Only add if not overlapping with block regions
    const overlaps = inlineRegions.some(
      r => r.isBlock && start >= r.start && start < r.end
    )
    if (!overlaps) {
      inlineRegions.push({ start, end, content, isBlock: false })
    }
  }

  // Sort regions by start position
  inlineRegions.sort((a, b) => a.start - b.start)
  
  // Build pieces, skipping any overlaps
  for (const r of inlineRegions) {
    if (r.start >= lastIndex) {
      pushText(lastIndex, r.start)
      pieces.push({ kind: r.isBlock ? 'block' : 'inline', content: r.content })
      lastIndex = r.end
    }
  }
  pushText(lastIndex, s.length)
  return pieces
}


