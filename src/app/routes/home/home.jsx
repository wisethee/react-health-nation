import { Fragment } from "react";
import Section from "../../core/components/section/section";

import DATA from "../../data/data.json";

const Home = () => {
  return (
    <Fragment>
      {DATA.map(({ id, title, description, order, btnColor }) => {
        return (
          <Section
            key={id}
            title={title}
            description={description}
            btnColor={btnColor}
            order={order}
          />
        );
      })}
    </Fragment>
  );
};

export default Home;
