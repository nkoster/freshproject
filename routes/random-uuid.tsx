import {Handler} from '$fresh/server.ts'

export const handler: Handler = {
  GET: async () => {
    const uuid = crypto.randomUUID()
    return new Response(JSON.stringify({uuid}), {
      headers: {'content-type': 'application/json'},
    })
  },
}
