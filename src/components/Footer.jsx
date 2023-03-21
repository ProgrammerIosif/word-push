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