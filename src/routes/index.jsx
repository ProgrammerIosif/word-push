import ImageSlider from '../components/ImageSlider';

function Index() {

  return (
    <>
      <section>
        <div className="pt-32">
          <div className="w-full max-w-6xl px-2.5 mx-auto">
            <h1 className="font-serif text-7xl"><span className="">Welcome to the world’s</span><br /><span>most popular website builder.</span></h1>
            <p className="max-w-4xl text-lg font-normal mt-6">42% of the web is built on WordPress. More bloggers, small businesses, and Fortune 500 companies use WordPress than all other options combined. Join the millions of people that call WordPress.com home.</p>
            <button className="mt-10 bg-primary-button text-white flex justify-center items-center w-40 h-14 rounded-md">Get Started</button>
            <ImageSlider/> 
          </div>
        </div>
      </section>
      <section className='h-[1000px] bg-[#101517] m-[-15rem]'>
      </section>
    </>
  )
}

export default Index
