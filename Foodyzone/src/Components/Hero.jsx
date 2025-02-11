import bgImg from '../assets/bg.png';
import Card from './Card';

const Hero = ({data}) => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className='min-h-screen bg-cover'>
      <Card foods={data} />
    </div>
  );
}

export default Hero;
