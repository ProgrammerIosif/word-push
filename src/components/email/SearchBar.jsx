import { useState,useEffect } from "react";

const strings = [
  'admin@codeispoetry.art',
  'info@opensourceforall.org',
  'hello@artfulbaker.blog',
  'support@mymercantile.store',
  'contact@shoeboxgraphics.com'
]

const Typewriter = () => {
  const [activeText, setActiveText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = index % strings.length;
      const currentString = strings[currentIndex];

      if (!isDeleting) {
        setActiveText((prev) => prev + currentString.charAt(prev.length));
      } else {
        setActiveText((prev) => prev.slice(0, -1));
      }

      if (activeText === currentString) {
        setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        setSpeed(50);
      } else if (activeText === '' && isDeleting) {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
        setSpeed(120);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [activeText, index, isDeleting, speed, strings]);

  return (
    <div className="flex justify-center">
      <div className="">
        {activeText}
      </div>
    </div>
  );
};

function SearchBar() {
  return (
    <div className='relative bg-white border w-full rounded shadow-lg p-5 flex gap-4'>
        <img width='24' height='24' src="https://cdn-icons-png.flaticon.com/512/9351/9351538.png" alt='' className="h-6"/>
        <Typewriter/>
    </div>
  )
}

export default SearchBar;