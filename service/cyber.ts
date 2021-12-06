import { Graph } from "../schema/chart"

export async function getGraphFromHostId(hostId: string): Promise<Graph> {
  const result = await fetch(`/api/cyberai/graph/${hostId}`)
  return await result.json()
}
