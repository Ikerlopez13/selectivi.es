'use client'

import React from 'react'
import { InlineMath, BlockMath } from 'react-katex'

// Very small helper to render strings that may contain LaTeX between $...$ / $$...$$ or \(...\) / \[...\]
export default function MathText({ text }: { text: string }) {
  const parts = React.useMemo(() => tokenizeMath(text), [text])
  return (
    <>
      {parts.map((p, i) =>
        p.kind === 'inline' ? (
          <InlineMath key={i} math={p.content} />
        ) : p.kind === 'block' ? (
          <div key={i} className="my-2">
            <BlockMath math={p.content} />
          </div>
        ) : (
          <React.Fragment key={i}>{p.content}</React.Fragment>
        )
      )}
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
  // Normalize escaped delimiters
  let s = input
  // Handle $$...$$ (block)
  const blockRegex = /\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g
  let lastIndex = 0
  let m: RegExpExecArray | null
  const pushText = (from: number, to: number) => {
    if (to > from) pieces.push({ kind: 'text', content: s.slice(from, to) })
  }

  const inlineRegions: { start: number; end: number; content: string; isBlock: boolean }[] = []
  while ((m = blockRegex.exec(s)) !== null) {
    const start = m.index
    const end = blockRegex.lastIndex
    const content = (m[1] ?? m[2] ?? '').trim()
    inlineRegions.push({ start, end, content, isBlock: true })
  }
  // Mark inline $...$ and \(...\)
  const inlineRegex = /\$(?!\$)([\s\S]*?)\$|\\\(([\s\S]*?)\\\)/g
  while ((m = inlineRegex.exec(s)) !== null) {
    const start = m.index
    const end = inlineRegex.lastIndex
    const content = (m[1] ?? m[2] ?? '').trim()
    inlineRegions.push({ start, end, content, isBlock: false })
  }

  inlineRegions.sort((a, b) => a.start - b.start)
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


