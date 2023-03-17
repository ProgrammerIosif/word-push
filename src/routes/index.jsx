import ImageSlider from '../components/ImageSlider';
import ImageGrid from '../components/ImageGrid';
import ProductsMenu from '../components/ProductsMenu';
import SearchBar from '../components/SearchBar';

function Index() {

  return (
    <>
      <section>
        <div className="pt-32 w-full max-w-6xl max-xl:px-5 mx-auto">
            <h1 className="font-serif text-7xl"><span className="">Welcome to the world’s</span><br /><span>most popular website builder.</span></h1>
            <p className="max-w-4xl text-lg font-normal mt-6">42% of the web is built on WordPress. More bloggers, small businesses, and Fortune 500 companies use WordPress than all other options combined. Join the millions of people that call WordPress.com home.</p>
            <button className="mt-10 bg-primary-button text-white flex justify-center items-center w-40 h-14 rounded-md">Get Started</button>
            <ImageSlider/> 
        </div>
      </section>
      <section className='bg-[#101517] my-[-15rem] flex justify-center'>
        <div className="pt-60 w-full max-w-[1400px] max-xl:px-5">
          <div className="pt-[180px] w-full max-w-6xl mx-auto text-white">
            <h1 className="font-serif text-7xl"><span className="">Stand out with stylish</span><br /><span>themes and patterns</span></h1>
            <p className="max-w-4xl text-lg font-normal mt-6">Instantly transform the look and feel of your site with beautifully crafted themes and one-click layouts.</p>
            <button className="mt-10 bg-white text-black font-medium flex justify-center items-center w-48 h-12 rounded-sm">Find your theme</button>
          </div>
          <ImageGrid/>
          <div className="mt-52 w-full max-w-6xl my-10  mx-auto text-white">
            <h1 className="font-serif text-7xl"><span className="">Build anything with</span><br /><span>WordPress.com</span></h1>
            <p className="max-w-4xl text-lg font-normal mt-6">Whatever you're building, there's a fast, intuitive way to get started.</p>
            <ProductsMenu/>
          </div>
        </div>
      </section>
      <section className='mt-60 bg-white -mb-60'>
        <div className="pt-32 w-full max-w-6xl max-xl:px-5 mx-auto">
            <h1 className="font-serif text-7xl">Infinitely efortless editing</h1>
            <p className="max-w-xl text-lg font-normal mt-6">Magically drag, drop and draw on a huge collection of design patterns, features, and layouts with the intuitive, built-in block editor.</p>
            <button className="mt-10 bg-black text-white flex justify-center items-center w-40 h-14 rounded-md font-medium">Start creating</button>
            <video className="my-16" src="https://s1.wp.com/wp-content/themes/h4/assets/block-editor/2022-10@2x.mp4" autoPlay loop></video>
        </div>
      </section>
      <section className=' bg-[#bbe0fa] pt-60 -mb-14'>
        <div className="pt-32 w-full max-w-6xl max-xl:px-5 mx-auto">
            <h1 className="font-serif text-7xl">Your home on the web</h1>
            <p className="max-w-xl text-lg font-normal mt-6">Nothing sets your site apart faster than a unique address on the web. From <b>.com</b> to <b>.blog</b>, there’s a one-of-a-kind domain with your name on it. And your first year is free with any annual paid plan.</p>
            <button className="mt-12 bg-black text-white flex justify-center items-center w-48 h-12 rounded-md font-medium">Find your domain</button>
            <SearchBar/>
        </div>
      </section>
      <section className='bg-[#e9eff5]'>
        <div className="pt-60 w-full max-w-6xl max-xl:px-5 mx-auto">
            <h1 className="font-serif text-7xl max-w-5xl">Basically, the best managed WordPress hosting on the planet.</h1>
            <p className="max-w-3xl text-lg font-normal mt-6">Say hello to the next-level hosting performance made possible when you deeply integrate every piece of hardware and line of code to run WordPress at speed and scale.</p>
            <button className="mt-12 bg-[#0675c4] text-white flex justify-center items-center w-48 h-12 rounded-md font-medium">Explore hosting</button>
        </div>

      </section>
    </>
  )
}

export default Index
