export interface Graph {
  id: string
  process_name?: string
  children?: Graph[]
}
