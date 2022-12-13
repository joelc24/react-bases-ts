import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT: number  = 10



export const useCounter = ({ maxCount = 1 }) => {
    
    const [counter, setCounter] = useState(8)

    const counterElement = useRef<HTMLHeadingElement>(null)

    const tl = useRef( gsap.timeline() )

    useEffect(() => {

    //   if(counter < 10) return

    //   console.log('%cSe llego al valor maximo','color: red; background-color: black;')


      tl.current.to(counterElement.current, { y: -10, duration: .2, ease: 'ease.out'  })
        .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out'  })


    }, [counter])



    const handleClick = () => {
      setCounter( prev => Math.min( prev + 1, maxCount ))
    }

    return {

        counter,
        counterElement,
        handleClick
    
    }
}
