import Memoji from '../assets/memoji-smile.png';

const Hero = () => {
  
  return (
   <div className='front-page'>
      <h1 className='hello'>Hello!</h1>
      <h1 className='intro-text'>
        I'm <span className='name'>Yusra,</span> <br />
        Frontend Developer &
        <br />
        UX Designer
      </h1>
      <div className='memoji-container'>
      <img className='memoji' src={Memoji} alt='Memoji ikon'>
      </img>
    </div>
  </div>
  );
}

export default Hero;