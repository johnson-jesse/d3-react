import React from 'react'
import { GraphNode, Layout } from './type'

type Props = {
  node: d3.HierarchyPointNode<GraphNode>
  selected: d3.HierarchyPointNode<GraphNode>
  onSelected(node: d3.HierarchyPointNode<GraphNode>): void
}

export default function Node({ node, onSelected, selected }: Props) {
  const handleClick = () => onSelected(node)
  const isSelected = selected?.data.id === node.data.id
  return (
    <foreignObject
      key={node.data.id}
      width={Layout.NODE_WIDTH}
      height={Layout.NODE_HEIGHT}
      x={node.y - Layout.NODE_WIDTH}
      y={node.x - Layout.NODE_HEIGHT / 2}
    >
      <div
        className={`fizz-node ${node.children ? '' : 'fizz-leaf'} ${node.depth === 0 && 'fizz-root'} ${
          isSelected ? 'border-2 border-red-500 border-dashed' : ''
        } `}
        onClick={handleClick}
      >
        {node.data.process_name || node.data.id}
      </div>
    </foreignObject>
  )
}
