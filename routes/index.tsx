import {Head} from '$fresh/runtime.ts'
import {useSignal} from '@preact/signals'
import Counter from '../islands/Counter.tsx'

export default function Home() {
  const count = useSignal(3)
  console.log('count', count)
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div className="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          className="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p className="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter count={count}/>
      </div>
    </>
  )
}
