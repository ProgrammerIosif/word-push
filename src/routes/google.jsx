import Nav from '../components/Nav'

export default function Google() {
  return (
    <>
      <section className='bg-[#e74146] text-white min-h-[40vw] relative overflow-hidden'>
        <div>
          <img className='absolute top-1/2 w-1/3 opacity-50 -translate-y-1/2 rotate-[-7deg]' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/google/index/media/pink-lady.jpg" alt=""/>
          <img className='absolute top-1/2 w-1/4 right-0 bottom-0 rotate-[14deg] translate-x-1/3' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/google/index/media/people-laughing.jpg" alt=""/>
          <div className='w-1/3 aspect-square absolute bottom-[-28vw] left-[30vw] rotate-[7deg] bg-[#d43139]'></div>
        </div>
        <div className='relative z-20'>
          <Nav />
        </div>
        <div className='flex flex-col items-center justify-center relative z-10 min-h-[32vw] my-8'>
          <h1 className='text-6xl max-md:flex max-md:flex-col max-md:items-center'>
            <img className='inline mr-2 w-[50vw] md:w-[23vw]' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/google/index/media/logo-wpcom-boxed.svg" alt=""/>
            +
            <img className='inline ml-2 w-[50vw] md:w-[23vw] translate-y-1 md:translate-y-2' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/google/index/media/logo-google.svg" alt=""/>
          </h1>
          <p className='mx-8 md:max-w-[40vw] text-sm md:text-[1.5vw] leading-normal text-center mt-4'>Discover the easiest way to use Google tools and services on your WordPress website. No need to pick and choose. Get the best of the web on WordPress.com.</p>
        </div>
      </section>
      <section>
        <div className='flex max-md:flex-col-reverse md:items-center py-16 p-8 md:p-[10vw] pr-0 md:pr-0 gap-10'>
          <div className='my-auto flex-1 pr-8'>
            <button className='bg-[#2186dc] text-white py-3 px-5 mb-8 uppercase text-sm md:text-[1.5vw] font-semibold'>Google analytics</button>
            <h2 className='text-2xl lg:text-[2vw] leading-tight font-semibold'>Inform your business decisions with in-depth data – powered by Google.</h2>
            <p className='text-lg mt-4 opacity-50'>Add Google Analytics to your WordPress.com Business site to track performance. Get timely and detailed statistics about where your visitors are coming from, how they’re interacting with your site, and whether they’re responding to your marketing efforts.</p>
            <button className='bg-[#37476a] text-white py-3 px-6 mt-8 font-semibold rounded'>Learn About Google Analytics {'>'}</button>
          </div>
          <div className='flex-1'>
            <img className='w-full ' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/google/index/media/google-analytics-laptop-report.png" alt=""/>
          </div>
        </div>
      </section>
      <section className='bg-[#179370] text-white'>
        <div className='flex max-md:flex-col md:items-center py-16 p-8 md:p-[6vw] md:pt-0 gap-x-32 overflow-hidden'>
          <div className='flex-1 max-md:w-2/3 mx-auto relative md:translate-y-10'>
            <img className='relative z-10 w-full -rotate-[8deg] -translate-y-24' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/google/index/media/green-door.jpg" alt=""/>
            <div className='absolute top-0 w-full aspect-[4/5] border-t-8 border-l-8 border-[#137a65]'></div>
            <div className='absolute top-0 w-full aspect-[4/5] border-b-8 border-r-8 border-[#137a65] z-20'></div>
          </div>
          <div className='my-auto flex-1 pr-8 md:pt-10'>
            <button className='bg-[#0d513e] text-white py-3 px-5 mb-8 uppercase text-sm md:text-[1.5vw] font-semibold'>Google workspace</button>
            <h2 className='text-2xl lg:text-[2vw] leading-tight font-semibold'>Enjoy the most popular Google products right at your fingertips.</h2>
            <p className='text-lg mt-4 opacity-90'>Add a custom branded Gmail email address, Drive, Docs, Meet, and Chat to your WordPress.com account. Our integration with Google Workspace improves your workflow – no software required.</p>
            <button className='bg-white text-[#475155] py-3 px-6 mt-8 font-semibold rounded'>Learn About Google Workspace {'>'}</button>
          </div>
        </div>
      </section>
      <section>
        <div className='flex max-md:flex-col-reverse md:items-center py-16 p-8 md:p-[8vw] pr-0 md:pr-0'>
          <div className='my-auto flex-1 pr-8'>
            <button className='bg-[#565f75] text-white py-3 px-5 mb-8 uppercase text-sm md:text-[1.5vw] font-semibold'>Search Console</button>
            <h2 className='text-2xl lg:text-[2vw] leading-tight font-semibold'>Make your site easier to find with Search Console</h2>
            <p className='text-lg mt-4 opacity-50'>With Google Search Console integration, you can see your site like a search engine does. Get detailed reports that show how visitors are searching for you, what they’re clicking on, who is linking to your site, and much more. Optimize your site for more traffic and better discoverability.</p>
          </div>
          <div className='flex-1'>
            <img className='w-full ' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/google/index/media/iphone-search-console.jpg" alt=""/>
          </div>
        </div>
      </section>
      <section className='bg-[#2186dc] text-white'>
        <div className='flex max-md:flex-col md:items-center py-16 p-8 md:p-[8vw] pl-0 md:pl-0 gap-16'>
          <div className='flex-1'>
            <img className='w-full ' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/google/index/media/laptop-collaborative-editing.png" alt=""/>
          </div>
          <div className='my-auto flex-1 pl-8'>
            <button className='bg-[#0d47a1] text-white py-3 px-5 mb-8 uppercase text-sm md:text-[1.5vw] font-semibold'>Google docs</button>
            <h2 className='text-2xl lg:text-[2vw] leading-tight font-semibold'>Embrace collaborative editing for your WordPress website.</h2>
            <p className='text-lg mt-4 opacity-90'>Google Docs for WordPress.com lets you write, edit, and collaborate in Docs, then save it as a blog post on any WordPress.com site. Your images and most formatting will carry over from Docs to WordPress too. No more copy-and-paste headaches.</p>
            <button className='bg-white text-[#475155] py-3 px-6 mt-8 font-semibold rounded'>Learn About Google Docs {'>'}</button>
          </div>
        </div>
      </section>
      <section>
        <div className='flex max-md:flex-col md:items-center py-16 p-8 md:p-[6vw] gap-x-32 overflow-hidden'>
          <div className='flex-1 max-md:w-3/4 mx-auto relative '>
            <img className='relative z-10 w-5/6 rotate-[8deg] translate-x-10 -translate-y-14' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/google/index/media/photographer.jpg" alt=""/>
            <div className='absolute top-0 w-full aspect-square border-t-8 border-r-8 border-[#fe5252]'></div>
            <div className='absolute top-0 w-full aspect-square border-b-8 border-l-8 border-[#fe5252] z-20'></div>
          </div>
          <div className='my-auto flex-1 pr-8 md:pt-10'>
            <button className='bg-[#fe5252] text-white py-3 px-5 mb-8 uppercase text-sm md:text-[1.5vw] font-semibold'>Google workspace</button>
            <h2 className='text-2xl lg:text-[2vw] leading-tight font-semibold'>Enjoy the most popular Google products right at your fingertips.</h2>
            <p className='text-lg mt-4 opacity-50'>Add a custom branded Gmail email address, Drive, Docs, Meet, and Chat to your WordPress.com account. Our integration with Google Workspace improves your workflow – no software required.</p>
            <button className='bg-[#37476a] text-white py-3 px-6 mt-8 font-semibold rounded'>Learn About Google Workspace {'>'}</button>
          </div>
        </div>
      </section>
      <section className='bg-[#37476a] text-white relative overflow-hidden'>
        <div className='absolute h-full overflow-hidden'>
          <img className='w-[28vw] opacity-70 -rotate-[8deg]' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/google/index/media/girl-smiling.jpg" alt=""/>
        </div>
        <div className='absolute h-80 -bottom-20 -right-4 rotate-12 bg-[#2e3a52] w-80'></div>
        <div className='relative z-10 my-auto max-md:mx-10 md:flex md:flex-col md:items-center md:mx-[10vw] flex-1 pr-8 py-[15vw]'>
          <h2 className='text-4xl md:text-center lg:text-[2.8vw] leading-tight font-semibold'>Get the best web performance for your business site with the power of Google on WordPress.com.</h2>
          <p className='text-xl md:text-center mt-4 opacity-90'>Build your site with our Business Plan to add Google tools and services, no installation required.</p>
          <button className='bg-white text-[#37476a] py-3 px-6 mt-8 font-semibold rounded'>Get Started {'>'}</button>
        </div>
      </section>
    </>
  )
}
