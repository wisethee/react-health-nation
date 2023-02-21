import { Fragment, useContext } from "react";
import Cause from "../../core/components/cause/cause";
import About from "../../core/components/about/about";

import { DataContext } from "../../core/contexts/data";

const Home = () => {
  const { data } = useContext(DataContext);

  return (
    <Fragment>
      {data.map((cause) => {
        const { id } = cause;
        return <Cause key={id} cause={cause} />;
      })}
      <About btnColor={"secondary"} />
    </Fragment>
  );
};

export default Home;
