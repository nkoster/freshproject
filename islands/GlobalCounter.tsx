import {Button} from '../components/Button.tsx'
import {useSignal} from '@preact/signals'

export default function GlobalCounter() {

  const currentCount = localStorage.getItem('count')
  const count = useSignal(parseInt(currentCount) || 0)

  function updateCount(v) {
    count.value += v
    localStorage.setItem('count', count.value.toString())
  }

  return (
    <div className="flex gap-2 w-full">
      <p className="flex-grow-1 font-bold text-xl">{count}</p>
      {/*<Button onClick={() => globalState.count--}>-1</Button>*/}
      <Button onClick={() => updateCount(-1)}>-1</Button>
      <Button onClick={() => updateCount(+1)}>+1</Button>
    </div>
  )
}
