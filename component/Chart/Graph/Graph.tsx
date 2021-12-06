import React from 'react'
import useResizeObserver from '../useResizeObserver'
import { hierarchy, tree as Tree, zoom, select, HierarchyPointNode } from 'd3'
import { Graph } from '../../../schema/chart'
import { GraphNode, Layout } from './type'
import Node from './Node'
import Connector from './Connector'

type Props = {
  data: Graph
}

export default function FatTree(props: Props) {
  const wrapperRef = React.useRef()
  const svgRef = React.useRef()
  const dimension = useResizeObserver(wrapperRef)
  const [selectedNode, setSelectedNode] = React.useState<HierarchyPointNode<GraphNode>>()
  const [selectedAncestors, setSelectedAncestors] = React.useState<HierarchyPointNode<GraphNode>[]>()

  const delta = React.useMemo(() => {
    if (dimension && props.data) {
      const _node = hierarchy(props.data)
      const margin = { top: 25, right: 150, bottom: 25, left: 150 }
      const innerWidth = dimension.width - margin.right - margin.left
      const innerHeight = dimension.height - margin.top - margin.bottom

      const treeLayout = Tree<GraphNode>().nodeSize([
        Layout.LENGTH_BETWEEN_CHILDREN,
        Layout.LENGTH_BETWEEN_PARENT_CHILD
      ])
      const tree = treeLayout(_node)

      const svg = select(svgRef.current)
      const content = svg
        .select('.content-wrapper')
        .attr('transform', `translate(${margin.left}, ${dimension.height / 2})`)

      svg.call(
        zoom().on('zoom', e => {
          content.attr('transform', e.transform)
        })
      )

      return {
        tree,
        dimension,
        margin,
        innerHeight,
        innerWidth
      }
    }
  }, [dimension, props.data])

  const handleSelectedNode = (node: HierarchyPointNode<GraphNode>) => {
    setSelectedAncestors(node.ancestors())
    setSelectedNode(node)
  }

  return (
    <div className='h-full' ref={wrapperRef}>
      <svg ref={svgRef} width={dimension?.width} height={dimension?.height}>
        <g className='content-wrapper'>
          {delta?.tree?.links().map(link => (
            <Connector
              key={`${link.source.data.id}-${link.target.data.id}`}
              link={link}
              selected={selectedNode}
              selectedAncestors={selectedAncestors}
            />
          ))}
          {delta?.tree?.descendants().map(node => (
            <Node key={node.data.id} node={node} onSelected={handleSelectedNode} selected={selectedNode} />
          ))}
        </g>
      </svg>
    </div>
  )
}
