import {PageProps} from '$fresh/server.ts'

export default function GreetPage({params}: PageProps) {
  return <div>Hello {params.name}</div>
}
