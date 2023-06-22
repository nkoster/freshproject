import {PageProps} from '$fresh/server.ts'

export default function GreetPage({params}: PageProps) {
  return (
    <div>
      <div>Hello {params.name}</div>
      <pre>
        {JSON.stringify(params, null, 2)}
      </pre>
    </div>
  )
}
