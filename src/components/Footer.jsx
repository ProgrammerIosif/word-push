import { Link } from "react-router-dom";

import JetpackLink from "./JetpackLink";

const links = [
  {
    title: 'Products',
    links:[
      'WordPress Hosting',
      'Domain Names',
      'Website Builder',
      'Create a Blog',
      'Professional Email'
    ]
  },
  {
    title: 'Features',
    links: [
      'Overview',
      'Google Apps'
    ]
  },
  {
    title: 'Resources',
    links: [
      'WordPress.com Support',
      'WordPress Forums',
      'WordPress News',
      'Website Building Tips',
      'Logo Maker',
    ]
  },
  {
    title: 'Company',
    links: [
      'About',
      'Partners'
    ]
  }
]

function Footer() {
  return (
    <div className="bg-[#141517]">
      <div className="max-w-5xl max-xl:mx-8 mx-auto">
        <div>
          <Link to="/" className='flex mr-8 gap-1 py-[6px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 36" className="h-10 mt-16">
              <path d="M47.57 10l-2.79 10.72L41.99 10h-2.81l.65 2.3-2.45 8.78L34.7 10H32l3.8 14h2.96l2.28-7.49L43.17 24h2.95l4-14h-2.55zm28.39 4.06a9 9 0 0 0-1.86-.23c-3.4 0-5.26 2.27-5.26 5.6 0 3.31 1.86 4.82 4.05 4.82a5.45 5.45 0 0 0 3.2-1.17V24h2.33V10h-2.46v4.06zm0 7.08c-.8.73-1.55 1.13-2.34 1.13-1.36 0-2.23-.9-2.23-3.01 0-2.28 1.08-3.47 2.96-3.47.55 0 1.1.11 1.6.31v5.04zM64.2 15.7h-.09v-1.64h-2.3V24h2.47v-5.92c.77-1.46 1.71-1.94 3.28-1.94h.25V14a6.67 6.67 0 0 0-.67-.04c-1.34 0-2.26.52-2.94 1.75zm83.14-1.89c-3.4 0-5.01 2.2-5.01 5.23 0 3.02 1.6 5.2 5.01 5.2s5.01-2.18 5.01-5.2c0-3.03-1.63-5.23-5.02-5.23h.01zm0 8.44c-1.6 0-2.46-1.04-2.46-3.21 0-2.18.85-3.22 2.46-3.22 1.6 0 2.44 1.04 2.44 3.22 0 2.17-.84 3.21-2.45 3.21h.01zm19.12-8.44c-1.06 0-2.28.58-3.38 1.32l-.3.19c-.51-1.11-1.56-1.5-2.71-1.5-1.06 0-2.27.54-3.38 1.27v-1.03h-2.34V24h2.48v-7.13a5.3 5.3 0 0 1 2.61-.98c.81 0 1.32.44 1.32 1.84V24h2.46v-7.1c.92-.6 1.9-1 2.6-1 .82 0 1.32.43 1.32 1.84V24h2.46v-6.86c0-1.92-1.14-3.32-3.15-3.32zm-111.64 0c-3.4 0-5 2.2-5 5.23 0 3.02 1.6 5.2 5 5.2s5.02-2.18 5.02-5.2c0-3.03-1.64-5.23-5.03-5.23h.01zm0 8.44c-1.6 0-2.46-1.04-2.46-3.21 0-2.18.86-3.22 2.47-3.22 1.6 0 2.44 1.04 2.44 3.22 0 2.17-.85 3.21-2.46 3.21h.01zm40.31-6.56h-.08v-1.63h-2.31V24h2.46v-5.92c.77-1.46 1.71-1.94 3.28-1.94h.25V14a6.67 6.67 0 0 0-.67-.04c-1.33 0-2.25.52-2.94 1.75h.01zM86.05 10h-4.58v14h2.64v-4.87h1.93c2.99 0 5.16-1.61 5.16-4.62 0-3-2.17-4.51-5.16-4.51zm.02 7.08h-1.96v-5.01h1.95c1.6 0 2.38.88 2.38 2.44 0 1.57-.73 2.57-2.38 2.57h.01zm36.02-.23c0-.75.82-1.04 1.7-1.04.93.01 1.86.16 2.75.43V14.2a10.14 10.14 0 0 0-2.95-.38c-2.38 0-4.05 1.13-4.05 2.97 0 3.57 4.92 2.65 4.92 4.39 0 .85-.77 1.08-1.9 1.08-.8 0-2.07-.3-2.99-.63v2.03a8.29 8.29 0 0 0 2.9.59c2.32 0 4.53-.69 4.53-3.17.03-3.45-4.9-2.56-4.9-4.23zm-17.5-3.03c-3.18 0-4.83 2.47-4.83 5.16 0 3.7 1.94 5.27 5.1 5.27a11.81 11.81 0 0 0 3.65-.57v-2.05c-1.03.38-1.97.61-2.97.61-1.84 0-3.07-.5-3.13-2.67h6.36c.06-.49.09-.98.08-1.46 0-2.1-1.11-4.29-4.27-4.29zm-2.16 4.12c.15-1.38.9-2.26 2.13-2.26 1.32 0 1.72 1.05 1.72 2.26h-3.85zm10.7-1.09c0-.75.81-1.04 1.69-1.04.93.01 1.86.16 2.75.43V14.2a10.14 10.14 0 0 0-2.94-.38c-2.38 0-4.06 1.13-4.06 2.97 0 3.57 4.93 2.65 4.93 4.39 0 .85-.78 1.08-1.9 1.08-.8 0-2.07-.3-3-.63v2.03a8.28 8.28 0 0 0 2.9.59c2.32 0 4.54-.69 4.54-3.17.02-3.45-4.91-2.56-4.91-4.23zm21.97 2.1c0-2.33 1.27-3.12 2.78-3.12.94.03 1.88.22 2.76.57v-2.1a8.11 8.11 0 0 0-2.8-.48c-3.28 0-5.31 2-5.31 5.25 0 3.07 1.46 5.18 5.16 5.18 1.17 0 2.08-.23 3.08-.57v-2.04c-1.13.43-2 .6-2.77.6-1.63 0-2.9-.75-2.9-3.3zM128.66 24h2.47v-2.55h-2.47V24zM1.72 16c0 4.47 2.6 8.32 6.36 10.15L2.7 11.41A11.24 11.24 0 0 0 1.72 16zM13 27.28c1.31 0 2.57-.23 3.75-.64l-.08-.15-3.47-9.5-3.38 9.83c1 .3 2.07.46 3.18.46zm1.55-16.57l4.08 12.13 1.13-3.76c.48-1.56.85-2.68.85-3.65 0-1.4-.5-2.36-.92-3.1-.58-.94-1.11-1.73-1.11-2.65 0-1.04.78-2 1.9-2h.14A11.24 11.24 0 0 0 13 4.72 11.27 11.27 0 0 0 3.58 9.8l.72.02c1.18 0 3-.15 3-.15.62-.03.69.86.08.93 0 0-.61.08-1.3.11l4.12 12.22 2.47-7.4-1.76-4.82a20.13 20.13 0 0 1-1.18-.1c-.61-.04-.54-.97.07-.94 0 0 1.86.15 2.97.15 1.18 0 3-.15 3-.15.61-.03.69.86.08.93 0 0-.61.07-1.3.11zm4.12 15.04A11.28 11.28 0 0 0 24.28 16c0-1.96-.5-3.8-1.38-5.41a10.65 10.65 0 0 1-.78 5.2l-3.45 9.96zM13 29a13 13 0 1 1 0-26 13 13 0 0 1 0 26z" fill='#fff' fill-rule="nonzero"></path>
            </svg>
          </Link>
          <div className="grid grid-cols-4 py-12 text-white">
            {links.map(column => 
              <ul>
                <li className="font-semibold">{column.title}</li>
                {column.links.map(link => 
                  <li className="underline font-light text-[#c3c4c7] mt-3">{link}</li>
                )}
              </ul>
            )} 
          </div>
          <div className="flex py-10 items-center justify-between pr-10">
            <div className="flex gap-5">
              <JetpackLink app='Google Play' bgColor='black' color='white' />
              <JetpackLink app='App Store' bgColor='black' color='white' />
            </div>
            <div className="w-60 h-8 flex gap-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" >
                <path fill='#c3c4c7' d="M22.23 5.92a8.21 8.21 0 0 1-2.36.65 4.12 4.12 0 0 0 1.8-2.27 8.22 8.22 0 0 1-2.6 1 4.1 4.1 0 0 0-6.99 3.74 11.65 11.65 0 0 1-8.46-4.29 4.09 4.09 0 0 0-.55 2.06 4.1 4.1 0 0 0 1.82 3.42 4.09 4.09 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4.02 4.1 4.1 0 0 1-1.86.07 4.11 4.11 0 0 0 3.83 2.85 8.24 8.24 0 0 1-5.1 1.76 8.33 8.33 0 0 1-.97-.06 11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.67-6.25 11.67-11.67v-.53a8.3 8.3 0 0 0 2.04-2.13z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path fill='#c3c4c7' d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path fill='#c3c4c7' d="M12 4.62c2.4 0 2.69.01 3.64.05.87.04 1.35.2 1.67.31.42.17.72.36 1.03.68.32.31.51.61.68 1.03.12.32.27.8.3 1.67.05.95.06 1.24.06 3.64s-.01 2.69-.05 3.64a4.99 4.99 0 0 1-.31 1.67c-.17.42-.36.72-.68 1.03-.31.32-.61.51-1.03.68-.32.12-.8.27-1.67.3-.95.05-1.24.06-3.64.06s-2.69-.01-3.64-.05a4.99 4.99 0 0 1-1.67-.31 2.79 2.79 0 0 1-1.03-.68 2.79 2.79 0 0 1-.68-1.03c-.12-.32-.27-.8-.3-1.67-.05-.95-.06-1.24-.06-3.64s.01-2.69.05-3.64c.04-.87.2-1.35.31-1.67.17-.42.36-.72.68-1.03.31-.32.61-.51 1.03-.68.32-.12.8-.27 1.67-.3.95-.05 1.24-.06 3.64-.06M12 3c-2.44 0-2.75.01-3.71.05-.96.05-1.61.2-2.18.42a4.4 4.4 0 0 0-1.6 1.04c-.5.5-.8 1-1.04 1.6a6.6 6.6 0 0 0-.42 2.18C3.01 9.25 3 9.56 3 12s.01 2.75.05 3.71c.05.96.2 1.61.42 2.19a4.5 4.5 0 0 0 2.64 2.63 6.6 6.6 0 0 0 2.18.42c.96.04 1.27.05 3.71.05s2.75-.01 3.71-.05a6.9 6.9 0 0 0 2.19-.42 4.41 4.41 0 0 0 1.59-1.04c.5-.5.8-1 1.04-1.6a6.6 6.6 0 0 0 .42-2.18c.04-.96.05-1.27.05-3.71s-.01-2.75-.05-3.71a6.63 6.63 0 0 0-.42-2.19 4.41 4.41 0 0 0-1.04-1.59c-.5-.5-1-.8-1.6-1.04a6.6 6.6 0 0 0-2.18-.42C14.75 3.01 14.44 3 12 3zm0 4.38a4.62 4.62 0 1 0 0 9.24 4.62 4.62 0 0 0 0-9.24zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.8-8.88a1.08 1.08 0 1 0 0 2.16 1.08 1.08 0 0 0 0-2.16z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path fill='#c3c4c7' d="M21.8 8s-.2-1.38-.8-1.98c-.76-.8-1.6-.8-2-.85-2.8-.2-7-.2-7-.2s-4.2 0-7 .2c-.4.05-1.24.05-2 .85-.6.6-.8 1.98-.8 1.98S2 9.62 2 11.24v1.51c0 1.62.2 3.24.2 3.24s.2 1.38.8 1.99c.76.8 1.76.77 2.2.85 1.6.16 6.8.2 6.8.2s4.2 0 7-.2c.4-.05 1.24-.06 2-.85.6-.61.8-1.99.8-1.99s.2-1.62.2-3.23v-1.52C22 9.62 21.8 8 21.8 8zM9.93 14.6V8.96l5.4 2.82-5.4 2.8z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer;