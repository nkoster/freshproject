import {PageProps} from '$fresh/server.ts'

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    const resp = await ctx.render()
    resp.headers.set('X-Custom-Header', 'Customized Headerz G!')
    return resp
  },
}

export default function Html(props: PageProps) {
  return <div>you are on page {props.url.href}</div>
}
