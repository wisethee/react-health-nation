import { useParams } from "react-router-dom";
import { Fragment } from "react";
import Section from "../../core/components/section/section";
import Cause from "../../core/components/cause/cause";
import Info from "../../core/components/info/info";

import { DATA } from "../../data/data";

const Donate = () => {
  const params = useParams();
  const project = DATA.find((project) => project.id === parseInt(params.id));

  const { title, description, order, btnColor, bgClass, info } = project;

  return (
    <Fragment>
      <Cause
        title={title}
        description={description}
        btnColor={btnColor}
        order={order}
        headingSize={"h1"}
        sectionHeight={"hero"}
        sectionPadding={"py-0"}
        bgClass={bgClass}
      ></Cause>
      <Section height={"h-full"} padding={"py-20"}>
        <div className="gap-12 columns-1 lg:columns-2">
          {info.map(({ id, title, description, startVal, endVal }) => {
            return (
              <Info
                key={id}
                btnColor={"secondary"}
                infoTitle={title}
                infoDescription={description}
                startVal={startVal}
                endVal={endVal}
              />
            );
          })}
        </div>
      </Section>
    </Fragment>
  );
};

export default Donate;
