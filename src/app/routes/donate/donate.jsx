import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import Section from "../../core/components/section/section";
import Cause from "../../core/components/cause/cause";
import Info from "../../core/components/info/info";

import { DataContext } from "../../core/contexts/data";

const Donate = () => {
  const params = useParams();
  const { data } = useContext(DataContext);

  const project = data.find((project) => project.id === parseInt(params.id));

  return (
    <Fragment>
      <Cause cause={project} />
      <Section height={"h-full"} padding={"py-20"}>
        <div className="gap-12 columns-1 lg:columns-2">
          {project.info.map(({ id, title, description, startVal, endVal }) => {
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
