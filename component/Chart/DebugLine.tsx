import React from 'react'
import { Dimension } from './useResizeObserver'

type Props = {
  dimension: Dimension
}

export default function DefaultLine({ dimension }: Props) {
  return (
    <>
      <line
        x1={dimension?.width / 2}
        x2={dimension?.width / 2}
        y1={0}
        y2={dimension?.height}
        stroke='red'
        strokeWidth={1}
      />
      <line
        x1={0}
        x2={dimension?.width}
        y1={dimension?.height / 2}
        y2={dimension?.height / 2}
        stroke='red'
        strokeWidth={1}
      />
    </>
  )
}
