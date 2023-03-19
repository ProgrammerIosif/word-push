import { useState,useEffect } from "react";

const strings = [
  'artificial-eloquence.com',
  'pool-request.com',
  'splash-cache.com',
  'upload-down-code.com',
  'browser-powder.com',
  'front-end-hydration-station.com',
  'full-stack-lipstick.com',
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
    <div className="flex justify-center pl-6">
      <div className="">
        {activeText}
      </div>
    </div>
  );
};

function SearchBar({classes}) {
  return (
    <div className={`relative bg-[#f1f8fe] h-28 w-full rounded-xl shadow-lg p-5 flex gap-10 ${classes}`}>
      <div className="flex justify-around items-center h-full w-32 ml-6">
        {[0,1,2].map(() =>
          <div className="bg-[#d4dadf] h-5 w-5 rounded-full"></div>
        )}
      </div>
      <div className="bg-white w-full h-full rounded-xl flex justify-start items-center px-6">
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828471.png" alt="" className="h-6" />
        <Typewriter/>
      </div>
    </div>
  )
}

export default SearchBar;