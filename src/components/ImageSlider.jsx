import { useState, useEffect } from 'react';

const images = [
  'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-1-2x.webp',
  'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-2-2x.webp',
  'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-3-2x.webp',
  'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-4-2x.webp',
  'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-5-2x.webp'
];

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
    <div className="relative w-full aspect-[10/6.5] border-[12px] border-grey rounded-3xl mt-16">
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
    </div>
  );
}

export default ImageSlider;

