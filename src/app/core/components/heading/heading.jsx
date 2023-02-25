const Heading = ({ children, priority }) => {
  if (priority === "h1") {
    return (
      <h1 className="text-display-small md:text-display-medium lg:text-display-large mb-3">
        {children}
      </h1>
    );
  } else {
    return (
      <h2 className="text-headline-medium md:text-display-small lg:text-display-medium mb-3">
        {children}
      </h2>
    );
  }
};

export default Heading;
