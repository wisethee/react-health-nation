import Button from '../../components/button/button';
import circle from '../../../../assets/circle-purple.svg';

const Hero = () => {
  return (
    <section className='container mx-auto'>
      <div className='w-full'>
        <div className=''>
          <h1 className=''>
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur. Quis viverra augue sit eros at lacus dis
            egestas. Sit amet ultrices blandit vitae nunc ullamcorper malesuada. Blandit imperdiet
            egestas non id. Augue tempus volutpat erat mi nunc sed sem elementum.
          </p>
          <div className=''>
            <Button buttonType={'tertiary'} textTransform={'uppercase'} shadow={'shadow-sm'}>
              Learn more
              <span className='pl-2' aria-hidden='true'>
                &rarr;
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className=''>
          <img src={circle} alt='Logo' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
