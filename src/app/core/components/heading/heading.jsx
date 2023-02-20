const Heading = ({ children, priority }) => {
  if (priority === "h1") {
    return <h1 className="text-display-large">{children}</h1>;
  } else {
    return <h2 className="text-display-medium">{children}</h2>;
  }
};

export default Heading;
