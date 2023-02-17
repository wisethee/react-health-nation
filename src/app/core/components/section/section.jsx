import Button from "../../components/button/button";

const Section = ({ title, description, img, order, btnColor }) => {
  return (
    <section className="mx-auto px-6 md:px-0 p-20 flex items-center gap-x-20 cause">
      <div className={`w-full ${order}`}>
        <div className="text-left">
          <h2 className="text-headline-large tracking-tight">{title}</h2>
          <p className="mt-6 text-body-medium leading-8">{description}</p>
          <div className="mt-10 flex">
            <Button
              buttonType={btnColor}
              textTransform={"uppercase"}
              shadow={"shadow-sm"}
            >
              Donate now
              <span className="pl-2" aria-hidden="true">
                &rarr;
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex">
          <img src={img} alt="Img placeholder" />
        </div>
      </div>
    </section>
  );
};

export default Section;
