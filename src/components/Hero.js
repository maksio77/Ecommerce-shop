import React from 'react';

import  WomanImg from '../img/woman_hero.png';

const Hero = () => {
  return <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className="container mx-auto flex justify-around h-full">
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] mr-3 bg-red-400'></div>New Trend
        </div>
        <h1 className='text-[70px] leading-[1.1] font-light mb-4'>AUTUMN SALE STYLISH <br/>
            <span className='font-semibold'>WOMENS</span>
        </h1>
        <a href='https://www.linkedin.com/in/maksym-pavliv/' className='self-start uppercase font-semibold border-b-2 border-primary'>
          Discover More
        </a>
      </div>
      <div className='hidden lg:block'>
          <img src={WomanImg} alt='woman'/>
      </div>
    </div>
  </section>
};

export default Hero;