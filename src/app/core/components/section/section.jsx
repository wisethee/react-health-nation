const Section = ({ height, padding, bgClass = "bg-transparent", children }) => {
  return (
    <section className={`relative ${padding} ${height}`}>
      <div className="px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1280px] mx-auto w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:gap-12">
          {children}
        </div>
      </div>
      <div className={bgClass}></div>
    </section>
  );
};

export default Section;
