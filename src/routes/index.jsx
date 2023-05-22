import Nav from '../components/Nav';
import JetpackLink from '../components/JetpackLink';
import Plans from '../components/Plans';

import ImageSlider from '../components/index/ImageSlider';
import ImageGrid from '../components/index/ImageGrid';
import ProductsMenu from '../components/index/ProductsMenu';
import SearchBar from '../components/index/SearchBar';
import Cards from '../components/index/Cards';

export default function Index() {
  return (
    <>
      <section className="text-[#003c56]">
        <Nav/>
        <div className="pt-12 sm:pt-32 w-full max-w-6xl max-xl:px-5 mx-auto text-black">
            <h1 className="title"><span className="">Welcome to the world’s</span><br /><span>most popular website builder.</span></h1>
            <p className="max-w-4xl text-lg font-normal mt-6 max-sm:hidden">42% of the web is built on WordPress. More bloggers, small businesses, and Fortune 500 companies use WordPress than all other options combined. Join the millions of people that call WordPress.com home.</p>
            <button className="mt-10 bg-[#0675c4] text-white flex justify-center items-center w-40 h-12 rounded-md">Get Started</button>
            <ImageSlider/>
        </div>
      </section>
    <section className='bg-[#101517] -my-20 sm:-my-60 flex justify-center'>
        <div className="pt-36 md:pt-60 w-full max-w-[1400px] max-xl:px-5">
          <div className="mb-20 sm:mb-60 sm:pt-[180px] w-full max-w-6xl mx-auto text-white">
            <h2 className="title max-w-2xl">Stand out with stylish themes and patterns</h2>
            <p className="max-w-4xl text-lg font-normal mt-6">Instantly transform the look and feel of your site with beautifully crafted themes and one-click layouts.</p>
            <button className="mt-10 bg-white text-black font-medium flex justify-center items-center w-48 h-12 rounded-sm">Find your theme</button>
          </div>
          <ImageGrid/>
          <div className="my-20 sm:my-60 w-full max-w-6xl mx-auto text-white">
            <h2 className="title"><span className="">Build anything with</span><br /><span>WordPress.com</span></h2>
            <p className="max-w-4xl text-lg font-normal mt-6">Whatever you're building, there's a fast, intuitive way to get started.</p>
            <ProductsMenu/>
          </div>
        </div>
      </section>
      <section className='mt-20 bg-white -mb-60'>
        <div className="pt-20 md:pt-32 w-full max-w-6xl max-xl:px-5 mx-auto">
            <h2 className="title">Infinitely efortless editing</h2>
            <p className="max-w-xl text-lg font-normal mt-6">Magically drag, drop and draw on a huge collection of design patterns, features, and layouts with the intuitive, built-in block editor.</p>
            <button className="mt-10 bg-black text-white flex justify-center items-center w-40 h-14 rounded-md font-medium">Start creating</button>
            <video width='1200' height='600' className="my-16" src="https://s1.wp.com/wp-content/themes/h4/assets/block-editor/2022-10@2x.mp4" autoPlay loop></video>
        </div>
      </section>
      <section className='bg-[#bbe0fa] pt-40 -mb-10 sm:-mb-14'>
        <div className="pt-20 md:pt-32 w-full max-w-6xl max-xl:px-5 mx-auto">
            <h2 className="title">Your home on the web</h2>
            <p className="max-w-xl text-lg font-normal mt-6">Nothing sets your site apart faster than a unique address on the web. From <b>.com</b> to <b>.blog</b>, there’s a one-of-a-kind domain with your name on it. And your first year is free with any annual paid plan.</p>
            <button className="my-12 bg-black text-white flex justify-center items-center w-48 h-12 rounded-md font-medium">Find your domain</button>
            <SearchBar classes={'text-3xl h-20 sm:h-28'}/>
        </div>
      </section>
      <section className='bg-[#e9eff5] pb-28'>
        <div className="pt-36 sm:pt-60 w-full max-w-6xl max-xl:px-5 mx-auto">
            <h2 className="title max-w-5xl">Basically, the best managed WordPress hosting on the planet.</h2>
            <p className="max-w-3xl text-lg font-normal mt-6">Say hello to the next-level hosting performance made possible when you deeply integrate every piece of hardware and line of code to run WordPress at speed and scale.</p>
            <button className="mt-12 bg-[#0675c4] text-white flex justify-center items-center w-48 h-12 rounded-md font-medium mb-24">Explore hosting</button>
            <Cards/>
        </div>
      </section>
      <section className='bg-white mb-28'>
        <div className="pt-16 md:pt-36 sm:pt-60 w-full max-w-[1500px] max-xl:px-5 mx-auto flex flex-col items-center">
            <h2 className="font-serif text-5xl max-w-5xl mb-5 text-center">Choose your flavor of WordPush</h2>
            <Plans/>
        </div>
      </section>
      <section className='bg-[#e9eff5] pt-20 sm:pt-36 pb-24'>
        <div className="w-full max-w-6xl max-xl:px-5 mx-auto">
            <h2 className="title max-w-5xl">You'll never build alone</h2>
            <p className="max-w-2xl text-lg font-normal mt-6">Wherever you are in your journey, you don’t need to build your site alone. From direct support by email and live chat, to done-for-you sites built by our expert team, we’ve got your back every step of the way.</p>
            <div className='grid sm:grid-cols-2 pt-16 gap-x-6 gap-y-16'>
              <div>
                <img width='600' height='600' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/real-support-image-2x.webp" alt="" />
                <h3 className='font-serif text-4xl md:text-5xl my-5'>Real support</h3>
                <p>Our Happiness Engineers are always on hand to help. From live chat and expert email guidance to lively community forums – if you get stuck, or just need a hand getting set up, we’re here to make things happen.</p>
                <button className='mt-6 bg-[#0675c4] text-white flex justify-center items-center w-32 h-12 rounded-md font-medium'>Get help</button>
              </div>
              <div>
                <img width='600' height='600' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/built-by-image-2x.webp" alt="" />
                <h3 className='font-serif text-4xl md:text-5xl my-5'>Website design service</h3>
                <p>Creating a site or store from scratch can take time. Sit back as our expert team builds a site you’ll fall in love with. From single page sites to full-blown stores, we’ll help you make it happen, sooner.</p>
                <button className='mt-6 bg-[#0675c4] text-white flex justify-center items-center w-32 h-12 rounded-md font-medium'>Get started</button>
              </div>
            </div>
        </div>
      </section>
      <section className='bg-[#101517] pt-28 pb-16'>
        <div className="w-full section flex text-white gap-32">
          <div className='lg:max-w-md'>
            <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/vip-logo.svg" width='92' height='40' alt="" />
            <h2 className='text-5xl font-serif mt-8'>Think WordPress isn’t for the enterprise? Think again.</h2>
            <p className='my-8'>What do Salesforce, Al Jazeera, Capgemini, Facebook, and Merck have in common?</p>
            <p>They trust WordPress VIP—the enterprise platform built on WordPress—to deliver performance at scale while meeting the highest security standards. Starting at US$25,000/year</p>
            <button className='mt-10 bg-[#0675c4] text-white flex justify-center items-center w-32 h-12 rounded-md font-medium'>Get a demo</button>
          </div>
            <div className='max-lg:hidden xl:-mr-32'>
              <SearchBar classes={'bg-gray-400 h-20 rounded-b-none text-black text-xl'}/>
              <img width='710' height='410' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/salesforce-2x.webp" alt="" className='rounded-b-xl'/>
            </div>
        </div>
        <div id='banner'></div>
      </section>
      <section className='bg-[#2c3338] text-white'>
        <div className="py-28 w-full max-w-6xl max-xl:px-5 mx-auto">
          <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/jetpack-logo.svg" width='118' height='33' alt="" />
          <h2 className="title max-w-4xl mt-10">Take the best website builder anywhere with you.</h2>
          <p className="max-w-xl text-lg font-normal mt-6">The <b> Jetpack App</b> gives you everything you need to create, design, manage, and grow your site from anywhere.</p>
          <div className='flex gap-5 mt-12 max-[400px]:flex-col'>
            <JetpackLink app={'Google Play'} bgColor={'white'} color={'black'}/>
            <JetpackLink app={'App Store'} bgColor={'white'} color={'black'}/>
          </div>
        </div>
      </section>
    </>
  )
}
