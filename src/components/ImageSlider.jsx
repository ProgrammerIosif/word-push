import { useState, useEffect } from 'react';

const images = [
  'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-1-2x.webp',
  'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-2-2x.webp',
  'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-3-2x.webp',
  'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-4-2x.webp',
  'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-5-2x.webp',
  'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-7-2x.webp'
];

const samples = [
  {color1: 'bg-[#ffcefe]', color2:'bg-[#7db5c6]', textColor:'text-[#002a32]', font:'font-sans'},
  {color1: 'bg-[#ff7129]', color2:'bg-[#191919]', textColor:'text-[#002a32]', font:'font-sans'},
  {color1: 'bg-[#2400ff]', color2:'bg-[#2400ff]', textColor:'text-[#0730d9]', font:'font-serif'},
  {color1: 'bg-[#eee4d2]', color2:'bg-[#14453d]', textColor:'text-[#14453d]', font:'font-serif'},
  {color1: 'bg-[#d18c47]', color2:'bg-[#eee8ee]', textColor:'text-[#002a32]', font:'font-sans'},
  {color1: 'bg-[#eee]', color2:'bg-[#000]', textColor:'text-[#002a32]', font:'font-serif'}
]

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  return (
      <div className="relative w-[93%] xl:w-[100%] aspect-[10/6.5] border-[12px] border-grey rounded-3xl mt-16">
        {images.map((image, index) => (
          <img
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 rounded-lg ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            src={image}
            alt={`Slider image ${index}`}
          />
        ))}
        <div className='absolute -right-20 top-12 w-40 h-24 bg-grey/40 backdrop-blur-xl rounded-xl shadow-md'>
          {samples.map((sample, idx) => 

            <div key={idx} 
                className={`absolute h-full w-28 transition-opacity flex items-center justify-center ${sample.font} text-5xl ${sample.textColor} 
                ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}>Aa
              <div className={`w-5 h-5 rounded-full ${sample.color1} absolute left-28 top-6`}></div>
              <div className={`w-5 h-5 rounded-full ${sample.color2} absolute left-28 bottom-6`}></div>   
            </div>
          )}
        </div>
      </div>

  );
}

export default ImageSlider;

