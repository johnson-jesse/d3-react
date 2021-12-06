import React from 'react'
import GraphTree from '../component/Chart/Graph'
import { Graph } from '../schema/chart'

export default function Page() {
  const [graph] = React.useState<Graph>({
    id: 'Metasyntactic',
    children: [
      {
        id: 'Foo'
      },
      {
        id: 'Bar',
        children: [
          {
            id: 'Baz'
          },
          {
            id: 'Bit'
          }
        ]
      },
      {
        id: 'Corge'
      },
      {
        id: 'Grault',
        children: [
          {
            id: 'Garply'
          }
        ]
      },
      {
        id: 'Waldo'
      }
    ]
  })

  return <GraphTree data={graph} />
}
