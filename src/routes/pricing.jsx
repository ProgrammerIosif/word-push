import { Link } from "react-router-dom"

import Nav from "../components/Nav"
import Plans from "../components/Plans"
import Questions from "../components/Questions"

import Cards from "../components/pricing/Cards"
import Blocks from "../components/pricing/Blocks"

export default function Pricing() {
  window.scrollTo(0, 0);
  return (
    <>
      <section className="bg-[#101517] text-white">
        <Nav />
        <div className="py-12 section max-w-[1500px]">
          <h1 className="title text-center mb-8">There is a plan for you</h1>
          <Plans />
        </div>
      </section>
      <section className="bg-[#1b2224] text-white">
        <div className="py-20 section flex gap-10 justify-between max-md:flex-col">
          <div>
            <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/pricing-mar-2023/media/built-by-logo.svg" alt=""/>
            <h2 className="small-title my-4">Your site. Built by us.</h2>
            <p className="max-w-xl">Let our team of experts build your WordPress.com site. Whether you need a landing page or a full ecommerce site. We can build it for you.</p>
            <Link to="/start"><button className="mt-6 py-3 px-5 border rounded border-white">Get started</button></Link>
          </div>
          <img width="375" height="273" src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/pricing-mar-2023/media/built-by-image-2x.webp" alt=""/>
        </div>
      </section>
      <section className="bg-[#101517] text-white">
        <div className="pt-10 md:pt-24 section">
          <h2 className="small-title mb-4">The best way to WordPress.</h2>
          <p className="mb-16 max-w-lg">From the free plan on up, when you build with WordPress.com you get all of the benefits of fast, secure managed WordPress hosting.</p>
          <Cards />
          <img className="relative my-32 border-[10px] border-gray-200 rounded-3xl shadow-2xl" src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/pricing-mar-2023/media/theme-2x.webp" />
        </div>
      </section>
      <section className="bg-[#e9eff5] -mt-56 md:-mt-[500px]">
        <div className="pt-40 md:pt-[480px] section">
          <h2 className="small-title">There's beauty in everything.</h2>
          <p className="max-w-3xl pt-4 text-lg">Make your website look stunning with our custom‑made patterns and themes. Transform your design with a click, then magically drag and drop breathtaking layouts.</p>
          <Link to="/start"><button className="mt-6 bg-black py-3 px-6 rounded text-white">Build your site</button></Link>
          <div className="grid grid-cols-1
                          md:grid-cols-2 gap-12 md:gap-24 py-12 md:py-16">
            <Blocks color="black" content={blocks} />
            <img  src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/pricing-mar-2023/media/theme-2-2x.webp" alt=""/>
          </div>
        </div>
      </section>
      <section>
        <div className="section py-20">
          <h2 className="small-title pb-8">Your audience is out there.</h2>
          <p className="text-lg max-w-xl">Your site is the start of something. Connect with your audience and reach new people by meeting them where they are.</p>
          <Link to="/start"><button className="mt-6 bg-black py-3 px-6 rounded text-white">Start your site</button></Link>
          <div className="grid md:grid-cols-2 gap-16 mt-16">
            {[{
                title: 'Say it with a Newsletter.',
                text: 'Write directly to your audience. Every WordPress.com site is a newsletter waiting to happen.'
              },
              {
                title: 'Spread the word.',
                text: 'Reach more people across your socials and promote your posts with Blaze.'
              },
              {
                title: 'Meet the Reader.',
                text: 'With the Reader, you can keep up with what\'s new and find your people.'
              },
              {
                title: 'Keep them up to date.',
                text: 'RSS makes it simple for your audience to subscribe to your latest updates and never miss a beat.'
              }].map(item =>
                <div>
                  <h3 className="text-3xl font-serif mb-2">{item.title}</h3>
                  <p className="text-lg">{item.text}</p>
                </div>)
            }
          </div>
        </div>
      </section>
      <section className="bg-[#f6f7f7]">
        <div className="section py-20 flex flex-col items-center">
          <h2 className="small-title text-center">Frequently asked questions</h2>
          <p className="text-lg py-8 text-center">No worries, we get your questions answered.</p>
          <Questions list={questions} />
        </div>
      </section>
    </>
  )
}

const blocks = [
  {
    title: 'Design that shines on any screen',
    text: 'Easily create a mobile friendly website, optimized for every device, so your visitors can access your content from anywhere.'
  },
  {
    title: 'Your store. Your way.',
    text: 'Bring your online store to life with our selection of customizable themes. Choose from a variety of designs that match your brand\'s unique style and start selling in no time.'
  },
  {
    title: 'There\'s a pattern for that',
    text: 'Personalize the blank canvas of any page with Patterns – a range of flexible, intuitive, instant layouts.'
  }
]

const questions = [
  {
    q: 'Can i import my content to WordPress.com from another provider?',
    a: 'Yes, you can easily move your content to WordPress.com from other platforms such as Blogger, GoDaddy, Wix, Medium, Squarespace, and many more. Additionally, our import tool allows you to transfer your content seamlessly from a self‑hosted WordPress site.'
  },
  {
    q: 'Can I switch to a different plan after signing up?',
    a: 'If you have an active subscription on WordPress.com, you have the flexibility to switch to a different plan at any time. Any remaining funds from your current plan will be applied towards your new plan as a discount.'
  },
  {
    q: 'What domains are available? Can I use one I already own?',
    a: 'We have many domain extensions available, including popular ones like .com, .net, and .org. If you sign up for an annual or biannual plan, you\'ll get a free domain included for the first year. You can also use a domain you already own by connecting it to your WordPress.com site or transferring it to us for easy management.'
  },
  {
    q: 'Does the website hosting come for free when I create a site?',
    a: 'Yes, we provide free hosting for all WordPress.com sites with all plans.'
  },
  {
    q: 'What are WordPress plugins?',
    a: 'WordPress plugins are tools that you can add to your site to give it additional features and functionalities. With plugins, you can easily add a contact form, social media icons, a slideshow, an e‑commerce store, and much more, without needing to know how to code. You can access over 50,000 WordPress plugins, starting with the Business plan.'
  },
  {
    q: 'Can I make money with my site?',
    a: 'Yes, there are many ways to monetize your WordPress.com site, such as charging for premium content, selling products, creating memberships, and more. You can also publish sponsored posts or use affiliate links in your content. Additionally, you can apply to join WordAds, our advertising program.'
  },
  {
    q: 'Can I create a site in another language?',
    a: 'Yes, you can create your site in any language you prefer, as WordPress.com supports a wide range of languages. For more information, please visit our support page all about setting up multilingual sites.'
  }
]
