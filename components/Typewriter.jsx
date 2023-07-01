import { useState,useEffect } from "react";

const Typewriter = ({strings, passIndex}) => {
  const list = strings.map(string => string + '       ')
  const [activeText, setActiveText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(120);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = index;
      const currentString = list[currentIndex];

      if (!isDeleting) {
        setActiveText((prev) => prev + currentString.charAt(prev.length));
      } else {
        setActiveText((prev) => prev.slice(0, -1));
      }

      if (activeText === currentString) {
          setIsDeleting(true);
          setSpeed(50);
      } else if (activeText === '' && isDeleting) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % list.length);
        setSpeed(120);
      }

    }, speed);

    return () => clearTimeout(timer);
  }, [activeText, speed]);

  if(passIndex != undefined) passIndex(index)

  return(
    <div className="flex justify-center">
      <div>
        {activeText}
      </div>
    </div>
  );
};

export default Typewriter;
