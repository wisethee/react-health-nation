import {gsap} from "gsap";
import { useLayoutEffect, useRef } from "react";
import "./animate.css";
const Animate = () => {
    const app = useRef()
  useLayoutEffect(()=> {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(".container", { opacity: 0.6 });
      gsap.to(".circle", { duration: 2, x:500, y:-500, repeat: 2, yoyo: true })
    }, app);
    return () => ctx.revert()
  }, []) 
  

  return (
    
      <div  ref={app}>
        <div className="container">test test</div>
        <div className="circle"></div>
      </div>
  )
    
}

export default Animate;