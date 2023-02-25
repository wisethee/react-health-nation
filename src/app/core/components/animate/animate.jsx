import {gsap} from "gsap";
import { useLayoutEffect, useRef } from "react";
import "./animate.css";
const Animate = () => {
    const app = useRef()
  useLayoutEffect(()=> {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(".circle", { duration: 2, x:50, y: 50, repeat: 2, yoyo: true })
    }, app);
    return () => ctx.revert()
  }, []) 
  

  return (
    
      <div  ref={app}>
        <div className="test-circle"></div>
        <div></div>
      </div>
  )
    
}

export default Animate;