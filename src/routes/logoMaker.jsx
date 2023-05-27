import { Link } from 'react-router-dom';

import Nav from '../components/Nav'

export default function LogoMaker() {
  window.scrollTo(0, 0);
  return (
    <>
      <section className="bg-[#055d9c] text-white relative">
        <div className='relative z-20'>
          <Nav />
        </div>
        <div className="py-12 md:py-32 section">
          <div className="relative">
            <h2 className="small-title">Create the perfect logo for your business, company, or website with our logo maker.</h2>
            <p className='max-w-2xl my-8 text-lg'>Make a strong first impression on your company’s website with a great logo. Lucky for you, creating one has never been easier with an online logo maker.<br />No design experience needed!</p>
            <Link to="/start"><button className='bg-[#c9356e] py-3 px-5 rounded'>Create your logo now</button></Link>
          </div>
        </div>
        <div className="bg-[url('https://s1.wp.com/wp-content/themes/h4/assets/logo-outlines/720.svg')] invert bg-no-repeat bg-right opacity-20 absolute md:right-40 top-0 h-full w-[720px]"></div>
      </section>
      <section>
        <div className='py-16 md:py-32 section text-lg flex flex-col items-center'>
          <div className='grid md:grid-cols-2 gap-x-24 gap-y-12'>
            <div className='grid grid-cols-2 gap-4'>
              <img src="https://wpcom.files.wordpress.com/2020/11/upchow.png" alt=""/>
              <img src="https://wpcom.files.wordpress.com/2020/11/happy-plants-1.png" alt=""/>
              <img src="https://wpcom.files.wordpress.com/2020/11/leaf-sweets.png" alt=""/>
              <img src="https://wpcom.files.wordpress.com/2020/11/brookside-realtors.png" alt=""/>
            </div>
            <div>
              <h2 className='mb-5 text-3xl font-bold text-[#055d9c]'>First impressions matter.</h2>
              <p>Did you know website visitors form an opinion about the quality of a site within 50 milliseconds?<br/> The look and feel of your website, specifically the logo and other visuals, can be the first thing people visiting your website see or read so it’s important to be thoughtful and consistent.</p>
              <h2 className="mb-5 mt-12 text-3xl font-bold text-[#055d9c]">Bring out your style.</h2>
              <p>WordPress.com has partnered with Fiverr to help you create a professional logo that won’t break the bank. Make all of the customizations and changes you need.</p>
            </div>
          </div>
          <h2 className='text-4xl md:text-5xl text-center mt-20 md:mt-40 font-serif max-w-lg text-[#055d9c]'>Make a professional logo in a few clicks today.</h2>
          <Link to="/start"><button className='py-3 px-6 bg-[#0675c4] text-white mt-8 font-bold rounded'>Create your logo now</button></Link>
        </div>
      </section>
    </>
  )
}
