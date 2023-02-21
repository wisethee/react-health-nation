import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import Section from "../../core/components/section/section";
import Cause from "../../core/components/cause/cause";
import Info from "../../core/components/info/info";
import Circle from "../../core/components/circle/circle";

import { DataContext } from "../../core/contexts/data";
import { CheckoutContext } from "../../core/contexts/checkout";

const Donate = () => {
  const params = useParams();
  const { data } = useContext(DataContext);

  const { addItem } = useContext(CheckoutContext);

  const project = data.find((project) => project.id === parseInt(params.id));

  const addItemToCheckout = (id) => {
    addItem({ ...project, charityId: id });
  };

  return (
    <Fragment>
      <Cause cause={project} />
      <Section height={"h-full"} padding={"py-20"}>
        <div className="gap-12 columns-1 lg:columns-2">
          {project.info.map(({ id, title, description, startVal, endVal }) => {
            return (
              <Info
                key={id}
                id={id}
                btnColor={"secondary"}
                infoTitle={title}
                infoDescription={description}
                startVal={startVal}
                endVal={endVal}
                handleOnClick={addItemToCheckout}
              />
            );
          })}
        </div>
      </Section>
      <Circle
        customClass={"circle-light-green"}
        right="0"
        top="10%"
        id={"circle1"}
      />
      <Circle
        customClass={"circle-purple-fill"}
        right="50%"
        top="34%"
        id={"circle2"}
      />
      <Circle
        customClass={"circle-green-fill"}
        right="calc(60% - 100px)"
        top="calc(38% - 25px)"
        id={"circle3"}
      />
    </Fragment>
  );
};

export default Donate;
