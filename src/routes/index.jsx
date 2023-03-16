import ImageSlider from '../components/ImageSlider';
import ImageGrid from '../components/ImageGrid';
import ProductsMenu from '../components/ProductsMenu';

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
    </>
  )
}

export default Index
