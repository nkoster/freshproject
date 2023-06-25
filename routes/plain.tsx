import {Handlers} from '$fresh/server.ts'


export const handler: Handlers<any, { data: string }> = {
  GET(_req, _ctx) {
    console.log(_req, _ctx)
    return new Response(`Hello world! ${_ctx.state.data}`)
  }
}
