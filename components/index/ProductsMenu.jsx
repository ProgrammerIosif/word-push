import { useState } from "react";

const items = [
  {name:'Blog',link:'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/blog-2x.webp'},
  {name:'Newsletter',link:'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/newsletter-2x.webp'},
  {name:'Link in Bio',link:'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/link-in-bio-2x.webp'},
  {name:'Video',link:'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/video-2x.webp'},
  {name:'Store',link:'https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/store-2x.webp'}
];

function ProductsMenu() {
  const [selected, setSelected] = useState(0);

  const handleSelection = (index) => {
    setSelected(index);
  };

  return (
    <div className="my-10 md:my-24 flex justify-between max-sm:flex-col max-sm:gap-10">
      <div className="w-80 text-[#707374] text-3xl font-light">
        <ul className="flex flex-col gap-5">
          {items.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                index === selected ? 'underline text-white' : 'text-gray-500'
              }`}
              onMouseEnter={() => handleSelection(index)}
            >
              {item.name}
              <span className={`${selected === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                {' →'}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:w-2/3 relative aspect-[8/5]">
        {items.map((image, index) => (
          <img
            width='800'
            height='500'
            key={index}
            src={image.link}
            alt=''
            className={`absolute w-full opacity-${
              items[selected].link === image.link ? '100' : '0'
            } transition-opacity duration-500`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsMenu;
