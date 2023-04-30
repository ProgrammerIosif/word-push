import { useState } from "react"

export default function Questions({list}) {
  const [highlight,setHighlight] = useState(-1);
  return (
    <div className="max-w-2xl text-gray-600 text-lg">
      {list.map((item,idx) =>
        <div className="border-2 my-4 max-w-2xl">
          <div className="group py-3 px-5 flex items-center justify-between hover:opacity-70 cursor-pointer transition-all" onClick={() => {highlight === idx ? setHighlight(-1) : setHighlight(idx)}}>
            {item.q}
            <img src="https://cdn-icons-png.flaticon.com/512/561/561169.png" alt="" width='24' className={highlight === idx ? 'rotate-45 transition-all' : 'group-hover:rotate-[22.5deg] invert bg-white border rounded-full'}/>
          </div>
          <div className={highlight === idx ? 'mb-3 mx-5 text-base' : 'h-0 text-transparent'}>
            {item.a}
          </div>
        </div>)}
    </div>
  )
}
