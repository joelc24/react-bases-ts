import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT: number  = 10



export const useCounter = ({ maxCount = 10 }) => {
    
    const [counter, setCounter] = useState(8)

    const elementToAnimate = useRef<any>(null)

    const tl = useRef( gsap.timeline() )

    useLayoutEffect(() => {

      if(!elementToAnimate.current) return
      
      tl.current.to(elementToAnimate.current, { y: -10, duration: .2, ease: 'ease.out'  })
        .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out'  })
        .pause()

    }, [])

    useEffect(() => {
      // if (counter < maxCount) return

      tl.current.play(0)
    }, [counter])



    const handleClick = () => {
      setCounter( prev => Math.min( prev + 1, maxCount ))
    }

    return {

        counter,
        elementToAnimate,
        handleClick
    
    }
}
