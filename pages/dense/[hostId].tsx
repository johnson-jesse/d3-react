import { useRouter } from 'next/router';
import React from 'react';
import ReactTree from '../../component/Chart/Graph'
import { Graph } from '../../schema/chart'
import { getGraphFromHostId } from '../../service/cyber';

export default function Page() {
  const router = useRouter()
  const { hostId } = router.query
  const [graph, setGraph] = React.useState<Graph>()

  React.useEffect(() => {
    async function fetchData() {
      const result = await getGraphFromHostId(hostId as string)
      setGraph(result)
    }
    fetchData()
  }, [hostId])

  return <ReactTree data={graph} />
}
