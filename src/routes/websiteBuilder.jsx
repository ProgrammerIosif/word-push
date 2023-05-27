import { Link } from 'react-router-dom';

import Nav from '../components/Nav.jsx'

import Questions from '../components/Questions.jsx';

export default function WebsiteBuilder() {
  window.scrollTo(0, 0);
  return (
    <>
      <section className='text-white'>
        <div className='absolute -z-10 w-full h-full bg-[#055d9c]'>
          <div className='bg-[url("https://s-origin.wordpress.com/wp-content/themes/h4/assets/section-backgrounds/space.jpg")] opacity-75 bg-center bg-cover absolute h-full w-full'></div>
        </div>
        <Nav />
        <div className="py-6 md:py-24 max-w-3xl max-xl:px-5 mx-auto grid place-items-center">
          <img src="https://s1.wp.com/wp-content/themes/h4/assets/logo/wordpress-white.svg" alt="" width='70' height='70'/>
          <h1 className='small-title text-center mt-5 max-w-xl'>Welcome to the world’s most popular website builder.</h1>
          <h2 className='small-title text-center bg-[#0675c4] py-1 rounded-sm mb-8'>Your new website is waiting.</h2>
          <p className='text-center max-w-lg md:max-w-2xl md:text-lg'>More bloggers, small businesses, and Fortune 500 companies use WordPress.com than all other website builders combined. There’s a good reason, too. It’s the most accessible tool to create a website with drag-and-drop simplicity that’s mobile-friendly. And one that search engines will love.</p>
          <Link to="/start"><button className='bg-[#c9356e] py-3 px-4 rounded mt-6 mb-10'>Start your website</button></Link>
        </div>
      </section>
      <section className='text-[#055d9c] bg-white'>
        <div className="py-16 md:py-24 section">
          <h2 className='small-title'>Build a website that grows with you in a few simple steps.</h2>
          <h3 className='text-gray-600 text-xl md:text-3xl font-serif max-w-lg my-6'>So you can focus on sharing your work, growing your audience, and even making money.</h3>
          <div className='grid md:grid-cols-2 gap-10 md:gap-20'>
            {[{img:'bg-[url("https://assets.a8c.now.sh/static/gridicons-white/domains.svg")]',
               title: 'Start building.',
               subtitle: 'The opportunities are endless',
               text: 'WordPress.com gives you all the building blocks to create a website for any type of business. Choose from 60 styles depending on the content and functionality you want — and your website needs. And they’re also easy to integrate with the services you already love like Eventbrite, Pinterest, OpenTable, and Calendly, Mailchimp, YouTube, and more.'},
              {img: 'bg-[url("https://assets.a8c.now.sh/static/gridicons-white/customize.svg")]',
               title: 'Customize it.',
               subtitle: 'Brand identity and business performance in one.',
               text: 'The WordPress.com Block Editor puts complete customization at your fingertips. Keep things simple with default settings. Dial-up your brand with custom layout choices for your website. However you want to build, the Block Editor lets you easily drag and drop page elements, customize font sizes and color schemes until your website matches your vision.'},
              {img: 'bg-[url("https://assets.a8c.now.sh/static/gridicons-white/trophy.svg")]',
               title: 'Share your work',
               subtitle: 'Publish virtually anything and grow your own audience.',
               text: 'From blogging and podcasting to showcasing a portfolio or service, or even offering classes or events, WordPress.com makes it easy to put your work out there, with tools for nearly any content format. Then, share it out to friends and followers, send it as a newsletter, or syndicate it to social channels and content platforms. Engage with your community as it grows. The best part: you own it all, from content to audience.'},
              {img: 'bg-[url("https://assets.a8c.now.sh/static/gridicons-white/money.svg")]',
               title: 'Monetize your website',
               subtitle: 'Turn website visitors into paying customers.',
               text: 'Now, it’s time to start earning. And the WordPress.com Payments Block makes it easy and convenient. Create and embed credit and debit card payment buttons right into your website. Then, securely accept payments on your website for just about anything – physical items, digital downloads, memberships, services, donations, even tips.'}].map(item =>
                  <div>
                    <div className='w-9 h-9 bg-[#055d9c] rounded-full'>
                      <div className={`w-9 h-9 ${item.img} bg-contain bg-center`}></div>
                    </div>
                    <h4 className='text-2xl md:text-3xl font-medium my-4'>{item.title}</h4>
                    <h5 className='font-semibold my-2'>{item.subtitle}</h5>
                    <p className='text-gray-600'>{item.text}</p>
                  </div>)}
          </div>
          <div className='grid place-items-center'>
            <Link to="/start"><button className='mt-8 md:mt-20 bg-[#0675c4] text-white py-2.5 px-4 rounded'>Start your website</button></Link>
          </div>
        </div>
      </section>
      <section className="bg-[#044b7a] text-white">
        <div className="py-12 md:py-32 section relative">
          <div className="relative">
            <img src="https://s1.wp.com/wp-content/themes/h4/assets/webinars/hosts@3x.png" alt="" width='234' height='72'/>
            <h2 className="small-title my-8">Expert help when you need it.</h2>
            <h3 className='font-semibold mb-4'>Our Happiness Engineers are here to support you anytime.</h3>
            <p className='max-w-xl text-[#a9d2ed]'>Be confident building your website with support from WordPress experts. You can chat with them live if you have a question or learn at your own pace with on-demand webinars. With WordPress.com, you’ll always have all the tools and support you need to build a website that grows with you.</p>
          </div>
          <div className="bg-[url('https://s1.wp.com/wp-content/themes/h4/assets/logo-outlines/720.svg')] invert bg-no-repeat bg-right opacity-20 absolute -right-40 top-0 h-full w-[720px]"></div>
        </div>
      </section>
      <section className='bg-[#101517] text-white'>
        <div className="py-24 section relative">
          <h2 className="small-title mb-16">Pick from hundreds of themes. For any kind of project.</h2>
          <div className='grid md:grid-cols-2 gap-20'>
            <div className="border boder-white rounded-lg pt-5">
              <div className="border-t border-white h-full flex justify-center -mb-20 overflow-hidden rounded-b-lg">
                <img src="https://wpcom.files.wordpress.com/2018/02/dyad-2-wordpress-theme1.png" alt="" className='h-[380px] w-auto'/>
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='text-3xl font-serif mb-6'>You don’t need to learn web design to create the website of your dreams.</h3>
              <p className='max-w-xl'>Design a website that’s all you. WordPress.com themes have the perfect look for any website with hundreds of different designs, color schemes, and mobile-friendly layouts to choose from.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#008763] text-white'>
        <div className="py-24 section relative">
          <h2 className="small-title mb-16">Find everything you need for a powerful and profitable site.</h2>
          <div className='grid md:grid-cols-2 gap-20'>
            <div className="border boder-white rounded-lg pt-5">
              <div className="border-t border-white h-full flex justify-center  overflow-hidden rounded-b-lg">
                <img src="https://wpcom.files.wordpress.com/2020/06/editor-demo402x.png" alt="" className='h-[300px] w-auto'/>
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='text-3xl font-serif mb-4'>You want to spend time building your business, not your website. That’s why we made it easy.</h3>
              <p className='max-w-xl'>Once you get started building a website on WordPress.com, you’ll be inserting text, photos, forms, Yelp reviews, testimonials, and maps, in minutes. Move them around. Drag and drop them. Play until it’s perfect. You’ve totally got this! The Block Editor displays visual elements exactly how they’ll look on your live website, so you’ll never have to double check.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#055d9c] text-white">
        <div className="py-12 md:py-32 section relative">
          <div className="relative">
            <h2 className="small-title mb-10">Effortless Search Engine Optimization.</h2>
            <h3 className='text-3xl font-serif max-w-lg'>Out-of-the-box SEO tools and SSL certificates come standard.</h3>
            <p className='max-w-xl my-4'>WordPress.com comes stock with everything you need for an SEO-friendly website. Included content delivery networks (CDN) ensure your website’s pages load fast. The included SSL certificates make your site’s security a breeze. Simple on-page SEO elements help your site rank higher and drive more traffic. And Jetpack-powered XML sitemaps keep your pages organized and auto-updated for search engines.</p>
            <Link to="/start"><button className='bg-[#c9356e] py-2.5 px-4 text-sm rounded'>Start your website</button></Link>
          </div>
          <div className="bg-[url('https://s1.wp.com/wp-content/themes/h4/assets/logo-outlines/720.svg')] invert bg-no-repeat bg-right opacity-20 absolute -right-40 top-0 h-full w-[720px]"></div>
        </div>
      </section>
      <section>
        <div className="py-20 md:py-32 section text-gray-500">
          <h2 className="small-title mb-16 text-center text-[#055d9c]">People love WordPress.com.</h2>
          <div className='grid md:grid-cols-3 gap-20'>
            {[{text: 'I looked into what other bloggers whom I admired were using, and the Cadillac of platforms is WordPress.com, hands down. The themes are breathtaking—even the free ones!—and all of the supporting infrastructure and information is top shelf.',
               name: 'Alexis Kanda-Olmstead',
               site: 'alexiskanda-olmstead.com',
               img: 'https://s1.wp.com/wp-content/themes/h4/assets/testimonial-authors/alexis-kanda-olmstead.jpg'},
              {text: 'It’s been a great privilege and a life-changing experience. I’m grateful to WordPress.com for providing an affordable and user-friendly platform for individuals to launch projects and be heard in this way',
               name: 'Ann Morgan',
               site: 'ayearofreadingtheworld.com',
               img: 'https://s1.wp.com/wp-content/themes/h4/assets/testimonial-authors/ann-morgan.jpg'},
              {text: 'WordPress.com works really well with Google for a great SEO ranking. I can also embed YouTube videos, Google Maps, and other content easily and without any coding ability',
               name: 'Quintin Lake',
               site: 'theperimeter.uk',
               img: 'https://s1.wp.com/wp-content/themes/h4/assets/testimonial-authors/quintin-lake.jpg'}].map(item =>
                  <div>
                    <p className='before:content-["“"] after:content-["“"] mb-5'>{item.text}</p>
                    <div className='flex'>
                      <img src={item.img} alt="" className='rounded-full' width='64' height='64'/>
                      <div className='flex flex-col justify-center ml-4'>
                        <h3 className='text-[#055d9c] font-semibold'>{item.name}</h3>
                        <p>{item.site}</p>
                      </div>
                    </div>
                  </div>)}
          </div>
        </div>
      </section>
      <section className='bg-[#055d9c] text-white'>
        <div className="py-20 md:py-32 section flex flex-col items-center">
          <h2 className="small-title mb-8 text-center">Your new website is waiting.</h2>
          <p className='text-center'>No code, no manuals, no limits. Unlock the power of the most flexible website builder.</p>
          <Link to="/start"><button className='bg-[#c9356e] rounded py-2.5 px-4 mt-8'>Start your website</button></Link>
        </div>
      </section>
      <section>
        <div className="py-16 md:py-32 section flex flex-col items-center">
          <h2 className="small-title mb-8 text-center text-[#0675c4]">You asked, we answered.</h2>
          <Questions list={questions}/>
          <Link to="/start"><button className='bg-[#0675c4] text-white rounded py-2.5 px-4 mt-8'>Start your website</button></Link>
        </div>
      </section>
      <section className='text-white'>
        <div className='absolute -z-10 w-full h-full bg-[#055d9c]'>
          <div className='bg-[url("https://s-origin.wordpress.com/wp-content/themes/h4/assets/section-backgrounds/space.jpg")] opacity-75 bg-center bg-cover absolute h-full w-full'></div>
        </div>
        <div className="py-12 md:py-24 w-full max-w-lg md:max-w-6xl max-xl:px-5 mx-auto grid place-items-center">
          <img src="https://s1.wp.com/wp-content/themes/h4/assets/logo/wordpress-white.svg" alt="" width='70' height='70'/>
          <h1 className='small-title text-center my-8'>You’re just a few clicks away from the website you’ve always wanted.</h1>
          <p className='text-center max-w-2xl text-lg'>No code, no manuals, no limits. Unlock the power of the world’s most flexible website builder. WordPress.com gives you everything you need to create your website today. Managed WordPress hosting, with more speed, security, bandwidth and storage. Your own domain, a world-class support team, real-time backups and updates, and so much more.</p>
          <Link to="/start"><button className='bg-[#c9356e] py-3 px-4 rounded mt-6 mb-10'>Start your website</button></Link>
        </div>
      </section>
    </>
  )
}

const questions = [
  {
    q: 'Do I need to know how to code to build a website on WordPress.com?',
    a: 'Nope. The WordPress.com Blocks Editor allows you to drag-and‑drop images into posts and pages, create designer‑worthy photo galleries, embed audio, video, documents, and more.\nWordPress.com is user-friendly and makes it possible to build a professional website without knowing how to code. Our editor is fast, intuitive, and includes HTML and Markdown support too.'
  },
  {
    q: 'Will I be able to sell online?',
    a: 'With a WordPress.com Business plan, you can sell individual items on your site with one-click payments. You can also create a full online store with rich eCommerce features, using WooCommerce.'
  },
  {
    q: 'Can I create a website in another language?',
    a: 'Absolutely. You can change your Site Language, which is the language your readers will experience at your site. You can also change the language you see while working on your site in the dashboard. The language you write on your website is up to you!'
  },
  {
    q: 'Will I have to pay for a custom domain for my website?',
    a: 'Your free website includes a subdomain: sitename.wordpress.com.\nYou can register a new custom domain or transfer an existing one to your free site, but you’ll need a paid WordPress.com plan to use it as your site’s main address. Every paid WordPress.com plan comes with a free domain for one year when paid annually.'
  },
  {
    q: 'Can I get an email account?',
    a: 'Yes! Try WordPress.com Professional Email free for three months. After that pricing starts at $3.50/month per mailbox. Learn more about Professional Email',
  },
  {
    q: 'Can i import content from another service?',
    a: 'It is possible to import your blog content from a variety of other blogging platforms, including Blogger, LiveJournal, Movable Type, Tumblr, Wix, Typepad, Xanga, and more. You can also import your content from a self-hosted WordPress site.'
  }
]

