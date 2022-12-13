import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT: number  = 10

export const CounterEffect = () => {

  const [counter, setCounter] = useState(8)

  const counterElement = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    
    if(counter < 10) return

    console.log('%cSe llego al valor maximo','color: red; background-color: black;')
    
    const tl = gsap.timeline()

    tl.to(counterElement.current, { y: -10, duration: .2, ease: 'ease.out'  })
      .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out'  })

    
  }, [counter])
  


  const handleClick = () => {
    setCounter( prev => Math.min( prev + 1, MAXIMUN_COUNT ))
  }

  return (
    <>
        <h1 className="mi-objeto">Counter:</h1>
        <h2 ref={ counterElement }>{ counter }</h2>

        <button onClick={ handleClick }>
            +1
        </button>
    </>
  )
}
