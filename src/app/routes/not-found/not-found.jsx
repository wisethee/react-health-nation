import Section from "../../core/components/section/section";
import { ReactComponent as NotFoundImg } from "../../../assets/not-found.svg";
import "./not-found.css";

const NotFound = () => {
  return (
    <Section height={"h-full"} padding={"py-12"} name={"not-found"}>
      <NotFoundImg className={"w-full"} />
    </Section>
  );
};

export default NotFound;
