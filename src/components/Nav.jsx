import { useState } from "react";
import { Link } from 'react-router-dom';

import Dropdown from "./Dropdown";

function Nav() {
  const [dropdownIdx, setDropdownIdx] = useState(0);
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const itemsWithDropdown = [
    {name:'Products ',y:152},
    {name:'Features ',y:256},
    {name:'Resources ',y:370}
  ]
  return (
    <>
    <div className='h-14 flex justify-between px-6 text-lg font-semibold text-primary-nav'>
      <ul className="flex">
        <Link to="/" className='flex mr-5 pb-0.5 gap-1 py-[11px]'>
            <img className='h-7' src="https://cdn-icons-png.flaticon.com/512/49/49006.png" alt=""/>
            <h2 className='font-medium text-xl'>WordPush.com</h2>
        </Link>
        {itemsWithDropdown.map((item,idx) => (
            <li className="after:content-['▾'] pr-5 cursor-pointer py-3" 
                onMouseEnter={() => {setDropdownIdx(idx+1),setDropdownVisibility(true)}}
                onMouseLeave={() => setDropdownVisibility(false)}>
                  {item.name} 
            </li>
          ))}
        <li className="py-3">Plans & Pricing</li>
      </ul>
      <div className="flex">
        <button>Log In</button>
        <button className="ml-8 my-2 px-3 border rounded-md border-primary-nav">Get Started</button> 
      </div>
    </div>
    <div>
      <Dropdown render={dropdownVisibility} idx={dropdownIdx} y={dropdownIdx === 0 ? 0 : itemsWithDropdown[dropdownIdx-1].y}/>
    </div>
    </>
  )
}

export default Nav
