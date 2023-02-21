import "./circle.css";

const Circle = ({ customClass, right, top, bottom, left, id }) => {
  return (
    <span
      className={`hidden lg:inline circle ${customClass}`}
      style={{ right: right, top: top, bottom: bottom, left: left }}
      id={id}
    ></span>
  );
};

export default Circle;
