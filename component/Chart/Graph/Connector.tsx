import React from 'react'
import { GraphNode } from './type'
import { HierarchyLink, HierarchyPointLink, linkHorizontal } from 'd3'

type Props = {
  link: HierarchyPointLink<GraphNode>
  selected: d3.HierarchyPointNode<GraphNode>
  selectedAncestors: d3.HierarchyPointNode<GraphNode>[]
}

const linkGenerator = linkHorizontal<HierarchyLink<GraphNode>, GraphNode>()
  .x(node => node.y) /* Flipped for horizontal usage */
  .y(node => node.x) /* Flipped for horizontal usage */

export default function Connector({ link, selected, selectedAncestors }: Props) {
  const isHot = selectedAncestors?.some(v => v.data.id === link.target.data.id)
  return <path d={linkGenerator(link)} fill='none' stroke={`${isHot ? 'red' : 'gray'}`} strokeWidth={isHot ? 2 : 1} />
}
