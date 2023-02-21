import { Fragment } from "react";
import Cause from "../../core/components/cause/cause";
import About from "../../core/components/about/about";
import {gsap} from "gsap";
import { useLayoutEffect, useRef } from "react";
import { DATA } from "../../data/data";

const Home = () => {
  const app = useRef()
  useLayoutEffect(()=> {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(".container", { opacity: 0.6 });
    }, app);
    return () => ctx.revert()
  }, []) 
  

  return (
    <Fragment>
      <div  ref={app}>
        <div className="container">test test</div>
      </div>
      {DATA.map(
        ({
          id,
          title,
          obj,
          description,
          order,
          btnColor,
          headingSize,
          sectionHeight,
          sectionPadding,
          bgClass,
        }) => {
          return (
            <Cause
              key={id}
              title={title}
              obj={obj}
              description={description}
              btnColor={btnColor}
              order={order}
              headingSize={headingSize}
              sectionHeight={sectionHeight}
              sectionPadding={sectionPadding}
              bgClass={bgClass}
              id={id}
            />
          );
        }
      )}
      <About btnColor={"secondary"} />
    </Fragment>
  );
};

export default Home;
