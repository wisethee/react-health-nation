import { Fragment } from "react";
import Section from "../../core/components/section/section";
import About from "../../core/components/about/about";

import DATA from "../../data/data.json";

const Home = () => {
  return (
    <Fragment>
      {DATA.map(
        ({
          id,
          title,
          description,
          order,
          btnColor,
          headingSize,
          sectionHeight,
          sectionPadding,
        }) => {
          return (
            <Section
              key={id}
              title={title}
              description={description}
              btnColor={btnColor}
              order={order}
              headingSize={headingSize}
              sectionHeight={sectionHeight}
              sectionPadding={sectionPadding}
            />
          );
        }
      )}
      <About btnColor={"secondary"} />
    </Fragment>
  );
};

export default Home;
