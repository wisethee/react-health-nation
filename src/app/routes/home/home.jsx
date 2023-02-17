import { Fragment } from 'react';
import Hero from '../../core/components/hero/hero';
import Section from '../../core/components/section/section';
import circle1 from '../../../assets/circle-orange.svg';
import circle2 from '../../../assets/circle-purple.svg';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Section img={circle1} order={'order-last'} justify={'justify-start'} btnColor={'orange'} />
      <Section img={circle2} order={'order-first'} justify={'justify-end'} btnColor={'grey'} />
      <Section img={circle1} order={'order-last'} justify={'justify-start'} btnColor={'tertiary'} />
    </Fragment>
  );
};

export default Home;
