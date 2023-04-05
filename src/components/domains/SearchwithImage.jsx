import { useState } from 'react';

import Typewriter from '../Typewriter'

const strings = [
  'dailywine.blog',
  'creatortools.shop',
  'literatiagency.com',
  'democratizework.org',
  'discardedobject.art'
]

const images = [
  'https://wpcom.files.wordpress.com/2022/01/domain-blog.jpg',
  'https://wpcom.files.wordpress.com/2022/01/domain-shop.jpg',
  'https://wpcom.files.wordpress.com/2022/01/domain-com.jpg',
  'https://wpcom.files.wordpress.com/2022/01/domain-org.jpg',
  'https://wpcom.files.wordpress.com/2022/01/domain-art.jpg'
];

function SearchwithImage() {
  const [index, setIndex] = useState(0);

  const updateIndex = (i) => {
    setIndex(i);
    console.log(index);
  }

  return (
    <div className='relative ml-24'>
      <div className='w-[295px] h-[454px]'>
        {images.map((image, idx) => (
          <img
            width='295'
            height='454'
            key={idx}
            className={`absolute top-0 left-0 transition-opacity duration-1000 rounded-lg ${
              idx == index ? 'opacity-100' : 'opacity-0'
            }`}
            src={image}
            alt=''
          />
        ))}
      </div>
      <div className="absolute w-[340px] bottom-80 right-12">
        <div className='relative bg-white border w-full rounded-lg shadow-lg p-4 flex gap-4'>
          <img width='24' height='24' src="https://cdn-icons-png.flaticon.com/512/594/594903.png" alt='' className="h-6"/>
          <Typewriter strings={strings} passIndex={updateIndex}/>
        </div>
      </div>
    </div>
  )
}

export default SearchwithImage;
