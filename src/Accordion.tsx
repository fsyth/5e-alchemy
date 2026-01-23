import type { PropsWithChildren } from 'react'
import { useState } from 'react'

import './Accordion.css'

export type AccordionProps = Readonly<PropsWithChildren<{
  heading: string,
  defaultExpanded?: boolean,
}>>

export default function Accordion(props: AccordionProps) {
  const { heading, defaultExpanded=false, children } = props

  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="Accordion">
      <div className="AccordionHeader" onClick={() => setIsExpanded(!isExpanded)}>
        <h2><span className="AccordionMarker">{isExpanded ? '▼' : '▶'}</span>{heading}</h2>
      </div>
      <div className={isExpanded ? 'AccordionBody' : 'AccordionBody hidden'}>
        {children}
      </div>
    </div>
  )
}
