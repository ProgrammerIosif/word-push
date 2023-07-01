import { useState } from "react"

export default function Blocks({color,content}) {
  const [expanded,setExpanded] = useState(0);
  return (
    <div>
      {content.map((item,idx) =>
        <div>
          <hr className="opacity-70"/>
          <div className="font-serif py-10">
            <div className="flex gap-4 cursor-pointer" onClick={() => expanded === idx ? setExpanded(-1) : setExpanded(idx)}>
              <img className={`${expanded === idx ? 'rotate-90' : ''} ${color === "white" ? 'invert' : ''} transition-all`} src="https://s1.wp.com/wp-content/themes/h4/assets/landpack-icons/toggle-chevron.svg" alt="" width='20' height='20'/>
              <p className="text-3xl">{item.title}</p>
            </div>
            <p className={`${expanded === idx ? '' : 'hidden'} pl-9 text-xl pt-3`}>{item.text}</p>
          </div>
        </div>)}
    </div>
  )
}

