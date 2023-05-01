import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dropdown(props) {
  const {links,idx,y,render} = props;
  const [hover, setHover] = useState(false);


  return (
    <>
      <div className={`max-lg:hidden w-56 fixed top-10 left-[${y}px] transition-all ease-out duration-300 ${render || hover ? '' : 'opacity-0 invisible'} pt-4`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
          <ul className="py-4 text-[#044b7a] text-sm font-semibold flex flex-col rounded-lg shadow-dropdown bg-white">
            {links.map(item =>
              <Link className="px-6 py-2 hover:bg-[#e9f0f5] transition-all" to={item.link}>{item.name}</Link>)}
          </ul>
      </div>
      <div className="lg-hidden">

      </div>
    </>
  )
}

