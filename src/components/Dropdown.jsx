import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dropdown(props) {
  const {idx,y,render} = props;
  const [hover, setHover] = useState(false);
  const liClasses = 'px-6 py-2 hover:bg-li-hover transition-all'

  const displayContent = () => {
    switch (idx) {
      case 1:
        return <>
          <Link className={liClasses} to='/hosting'>WordPress Hosting</Link>
          <Link className={liClasses} to='/hosting'>Domain Names</Link>
          <Link className={liClasses} to='/hosting'>Website Builder</Link>
          <Link className={liClasses} to='/hosting'>Create a Blog</Link>
          <Link className={liClasses} to='/hosting'>Professional Email</Link>
          <Link className={liClasses} to='/hosting'>Website Design Services</Link>
          <li><hr className="my-2"/></li>
          <li className={liClasses}>Enterprise</li>
        </>
      case 2:
        return <>
          <li className={liClasses}>Overview</li>
          <li><hr className="my-2"/></li>
          <li className={liClasses}>WordPress Themes</li>
          <li className={liClasses}>WordPress Plugins</li>
          <li className={liClasses}>Google Apps</li>
        </>
      case 3: 
        return <>
          <li className={liClasses}>WordPress.com Support</li>
          <li className={liClasses}>News</li>
          <li className={liClasses}>Website Building Tips</li>
          <li className={liClasses}>Bussines Name Generator</li>
          <li className={liClasses}>Logo Maker</li>
        </>
    }
  }
  
  return (
    <div className={`w-56 fixed top-8 left-[${y}px] transition-all ease-out duration-300 ${render || hover ? '' : 'hidden'} pt-4`}

      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
        <ul className="py-4 text-primary-dropdown text-sm font-semibold flex flex-col rounded-lg shadow-dropdown bg-white">
          {displayContent()}
        </ul>
    </div>

  )
}

export default Dropdown;