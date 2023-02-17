import { Fragment } from "react";
import Section from "../../core/components/section/section";

import DATA from "../../data/data.json";

const Home = () => {
  return (
    <Fragment>
      {DATA.map(({ id, title, description, imageUrl, order, btnColor }) => {
        return (
          <Section
            key={id}
            title={title}
            description={description}
            img={imageUrl}
            order={order}
            btnColor={btnColor}
          />
        );
      })}
    </Fragment>
  );
};

export default Home;
