import { Fragment } from "react";
import Cause from "../../core/components/cause/cause";
import About from "../../core/components/about/about";

import { DATA } from "../../data/data";

const Home = () => {
  return (
    <Fragment>
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
