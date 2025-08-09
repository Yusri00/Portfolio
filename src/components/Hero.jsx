import Memoji from '../assets/images/memoji-smile.png';

const Hero = () => {
  
  return (
   <div className='front-page'>
      <h1 className='hello'>Hello!</h1>
      <h1 className='intro-text'>
        I'm <span className='name'>
          <span>Y</span> 
          <span>u</span>  
          <span>s</span>  
          <span>r</span> 
          <span>a</span>
          </span>, <br />
        Frontend Developer &<br />
        UX Designer
      </h1>
      <div className='bubble-container'></div>
      <div className='bubble1'></div>
      <div className='bubble2'></div>
      <div className='bubble3'></div>
      <div className='bubble4'></div>
      <div className='bubble5'></div>
      <div className='bubble6'></div>
      
      <div className='memoji-container'>
      <img className='memoji-img' src={Memoji} alt='Ikon'>
      </img>
    </div>
  </div>
  );
}

export default Hero;