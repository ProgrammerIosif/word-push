import Link from 'next/link.js';

import Nav from '@/components/Nav'
import Footer from '@/components/Footer';

import SearchwithImage from '@/components/domains/SearchwithImage'

const Domains = () => {
  return (
    <>
      <Nav />
      <section>
        <div className="py-12 md:py-24 w-full max-w-6xl max-xl:px-5 mx-auto">
          <div className='flex max-md:flex-col justify-between mb-10'>
            <div className="flex flex-col justify-center">
              <h1 className="small-title text-[#055d9c]">Great ideas start with a good domain name</h1>
              <p className="max-w-4xl text-lg font-normal mt-6 text-[#c9356e]">Choose from 350+ endings with WordPress.com domain name search</p>
              <div className='flex gap-2'>
                <input className='w-full border h-12 my-5 rounded pl-3 border-[#c9356e]' type="text" name="domain" placeholder='Find your domain (not functional)'/>
                <button className="my-5 bg-[#c9356e] text-white flex justify-center items-center w-40 h-12 rounded-md">Search</button>
              </div>
            </div>
            <SearchwithImage/>
          </div>
          <p className='stroke-red-50 border border-gray-300 text-[#50575e] font-semibold text-center'>Deals on domains</p>
          <div className='grid xs:grid-cols-2 md:grid-cols-4 gap-5 pt-5'>
            {[{img: 'https://s1.wp.com/wp-content/themes/h4/assets/tld-logos/online.svg',
               text: '€6.40',
               cut: '€32.00/year'},
              {img: 'https://s1.wp.com/wp-content/themes/h4/assets/tld-logos/store.svg',
               text: '€1.08',
               cut: '€54.00/year'},
              {img: 'https://s1.wp.com/wp-content/themes/h4/assets/tld-logos/art.svg',
               text: '€15.00/year',
               cut: ''},
              {img: 'https://s1.wp.com/wp-content/themes/h4/assets/tld-logos/blog.svg',
               text: '€4.84',
               cut: '€22.00'}].map(item =>
                <div className='border border-gray-300 pb-1'>
                  <img src={item.img} alt=""/>
                  <div className='flex gap-2 justify-center'>
                    <p>{item.text}{item.cut ? <sup>*</sup> : <></>}</p>
                    <p className='text-gray-400 line-through'>{item.cut}</p>
                  </div>
                </div>)}
          </div>
          <p className='text-center mt-4 text-gray-500 text-sm italic '>* For the first year, after which renewal fees apply.</p>
        </div>
      </section>
      <section className='bg-[#008763] text-white'>
        <div className='py-12 md:py-24 section'>
          <div className='grid md:grid-cols-2 gap-12 md:gap-24'>
            <div className='flex flex-col justify-center'>
              <h2 className="small-title mb-5">Your domain.<br/> Your identity.</h2>
              <p>Your domain is a personalized address that’s easy to remember and easy to share. Build and grow your online presence with a custom domain.</p>
            </div>
            <div className="border boder-white rounded-lg pt-8">
              <div className="border-t border-white h-full flex justify-center pt-6">
                <img width='441' height='279' src="https://wpcom.files.wordpress.com/2021/12/wine-site.png" alt="" />
              </div>
            </div>
            <div className='w-full max-md:order-last border border-white rounded-xl flex justify-center'>
              <img className='rounded-lg' width='427' height='359' src="https://wpcom.files.wordpress.com/2021/12/wine-mockups.png" alt="" />
            </div>
            <div className='flex flex-col justify-center'>
              <h2 className='small-title mb-5'>Get started now.</h2>
              <p>Grab your domain name now so you don’t have to compromise later. Your domain is the starting step to a strong brand.</p>
            </div>
          </div>
          <div className="grid self-center md:grid-cols-3 gap-20 text-white mb-14 mt-28 md:mt-60">
            {[{img: 'https://s1.wp.com/wp-content/themes/h4/assets/domains/icon-copyright-green.svg',
               title: 'Look professional.',
               text: 'Nothing says you’re professional like a custom domain name. i.e. dailywine.blog'},
              {img: 'https://s1.wp.com/wp-content/themes/h4/assets/domains/icon-checkmark-green.svg',
               title: 'Build trust.',
               text: 'Studies revealed that 85% of consumers trust a custom domain based email more than a @gmail.com or @yahoo.com address.'},
              {img: 'https://s1.wp.com/wp-content/themes/h4/assets/domains/icon-fingerprint-green.svg',
               title: 'Strengthen your brand.',
               text: 'Build your name or your brand – not someone else’s. Once you build your identity you can take it anywhere.'}
             ].map(item =>
                <div>
                  <img src={item.img} alt=""/>
                  <h3 className="font-bold text-lg pt-5 pb-3">{item.title}</h3>
                  <p>{item.text}</p>
                </div>)}
          </div>
        </div>
      </section>
      <section className='text-[#2c3338]'>
        <div className="pb-28 section">
          <h2 className="small-title py-10 md:py-20">Supercharge your domain.</h2>
          <div className="grid gap-24 md:grid-cols-2">
            <div>
              <img className="rounded-xl" src="https://wpcom.files.wordpress.com/2021/12/freedomain.png" alt="" />
              <h3 className="font-semibold text-2xl my-5">Free domain for a year with an annual plan</h3>
              <p>Enjoy one year of a free domain or domain transfer when you get a WordPress.com annual plan.</p>
              <Link href="/pricing"><p className='underline text-lg mt-4'>Explore WordPress.com plans</p></Link>
            </div>
            <div>
              <img className="rounded-xl" src="https://wpcom.files.wordpress.com/2021/12/domainsettings.png" alt="" />
              <h3 className="font-semibold text-2xl my-5">Robust domain management tools</h3>
              <p>Our powerful and easy-to-use tools make domain management effortless. Everything you need in a simple interface</p>
            </div>
          </div>
          <img className="max-w-full rounded-xl mt-24" src="https://wpcom.files.wordpress.com/2021/12/l-calypso-management-view-1.jpg" alt="" />
          <h3 className="font-semibold text-2xl my-5">Baked right into WordPress.com</h3>
          <p>Manage your email, domain, and websites from a single dashboard.</p>
        </div>
      </section>
      <section className='bg-[#e9f0f5]'>
        <div className="py-12 md:py-24 section">
          <h2 className="small-title font-light text-[#2c3338]">Get more with your domain.</h2>
          <p className='bg-[#044b7a] w-max text-white text-sm py-1 px-4 mt-8 rounded'>Included for free with your domain</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 py-16 gap-8 md:gap-24">
            {[{img: 'https://s1.wp.com/wp-content/themes/h4/assets/domains/icon-privacy-protection.svg',
               title: 'Privacy Protection',
               text: 'We keep your identity secure. Free private domain registration is included with every domain purchase (where supported)'},
              {img: 'https://s1.wp.com/wp-content/themes/h4/assets/domains/icon-ssl-certificate.svg',
               title: 'SSL Certificate',
               text: 'When hosted on WordPress.com every domain is covered by a free SSL certificate, which protects all the data going to and from your site'},
              {img: 'https://s1.wp.com/wp-content/themes/h4/assets/domains/icon-dns-features.svg',
               title: 'Advanced DNS Features',
               text: 'WordPress.com DNS is among the fastest and most secure in the world.'},
              {img: 'https://s1.wp.com/wp-content/themes/h4/assets/domains/icon-email-forwarding.svg',
               title: 'Email Forwarding',
               text: 'Send new emails without starting from scratch. Set up simple email address forwards to your existing email account with our free email forwarding service.'},
              {img: 'https://s1.wp.com/wp-content/themes/h4/assets/domains/icon-professional-email.svg',
               title: 'Professional Email',
               text: 'Every domain comes with a free three month trial of Professional Email service so you can send and receive mail with your custom domain.'},
              {img: 'https://s1.wp.com/wp-content/themes/h4/assets/domains/icon-easy-upgrade.svg',
               title: 'Easy Upgrade',
               text: 'Turn your custom domain into a gorgeous website with our powerful tools or hire a professional with Built by WordPress.'}
            ].map(item =>
              <div>
                <img src={item.img} alt=""/>
                <h3 className="font-medium text-lg pr-24 py-3">{item.title}</h3>
                <p className="text-gray-500 max-sm:text-sm">{item.text}</p>
              </div>)}
          </div>
        </div>
      </section>
      <section>
        <div className="py-12 md:py-32 section">
          <h2 className="small-title text-gray-800">You asked, we answered.</h2>
          <p className="font-normal mt-6 text-gray-500 text-lg">Learn more about Professional Email and the 3-month free trial.</p>
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-8 md:gap-y-16 text-gray-500 mt-10 md:mt-20">
            {[{title: 'What is a domain name?',
               text: 'Domain names are the human friendly address for websites. Websites rely on the domain name system (DNS), which uses numeric addresses to route traffic all over the world wide web. Domain names are assigned to those numeric addresses to make it easier for humans to remember and locate individual websites.'},
              {title: 'What’s the difference between a domain and a website?',
               text: 'They work together but they are two distinct things. Think of your domain name as your address, or location on a map and your website as your home or store, where you keep your things.'},
              {title: 'Can I have more than one domain?',
               text: 'Many experts recommend that you do. Whether for personal or business needs, if your online identity is important to you then you want to have alternate spellings or common typographical errors. Do you have unique products or services? Grab the domain name for them!'},
              {title: 'Can I transfer a domain I already own?',
               text: 'Sure! Once you’ve created an account you can transfer as many transfer eligible domains as you’d like to WordPress.com.'},
              {title: 'Can I use my domain with other hosts?',
               text: 'Absolutely. With our robust DNS service and easy to use tools you can host your domain anywhere you like. You can even host your domain at one host and your email at another.',}
            ].map(item =>
                <div>
                  <h3 className="font-bold text-lg mb-4 text-black">{item.title}</h3>
                  <p>{item.text}</p>
                </div>)}
          </div>
        </div>
      </section>
      <section className="bg-[#e4f2ed] text-[#005c44]">
        <div className="py-12 md:py-32 section lg:flex gap-20">
          <div className="flex flex-col justify-center gap-6">
            <p>BEST IN CLASS</p>
            <h2 className="small-title">24/7 Support</h2>
            <p className="text-lg -mb-3">Get hands-on support from our experts through email or live chat.</p>
            <p className="text-lg">Whether you’re migrating from another provider or trying to create multiple email accounts we can always help. We’re excited to help you build and own your piece of the web.</p>
          </div>
          <img src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/support@2x.jpg" alt="" width='528' height='428'/>
        </div>
      </section>
      <section className="bg-[#facfd2] text-[#4d2054]">
        <div className="py-12 md:py-32 section">
          <h2 className="small-title">Create your professional online presence.</h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-32 text-lg mt-16">
            <div>
              <img className="rounded-xl" src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/plans@2x.jpg" alt=""/>
              <h3 className="text-3xl font-semibold mb-5 mt-8">Website plans for everyone.</h3>
              <p>We’ve got plans for book clubs, businesspeople, bird fanciers, Bond impersonators, bed and breakfast owners, sellers, and anyone else who wants to get online.</p>
              <Link href="/pricing"><p className="mt-4 font-semibold underline">Explore plans {'>'}</p></Link>
            </div>
            <div>
              <img src="https://wpcom.files.wordpress.com/2022/01/email402x.jpg" alt=""/>
              <h3 className="text-3xl font-semibold mb-5 mt-8">Email at your domain.</h3>
              <p>Get a 3-months free trial with professional email. Build and grow your online presence with a custom domain and personalized email address from WordPress.com.</p>
              <Link href="/professional-email"><p className="mt-4 font-semibold underline">Learn more {'>'}</p></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#055d9c] text-white">
        <div className="py-32 section relative">
          <div className="bg-[url('https://s1.wp.com/wp-content/themes/h4/assets/logo-outlines/720.svg')] invert bg-no-repeat bg-right opacity-20 absolute -left-40 top-0 h-full w-[720px]"></div>
          <div className="relative lg:left-1/2 lg:ml-20 lg:w-2/5">
            <h2 className="small-title max-w-sm mb-8">Your domain. Your email. Your website.</h2>
            <p>WordPress powers more than 42% of the web. Join the <br/> community. We’re committed to helping you succeed.</p>
            <Link href="/start"><button className="bg-[#c9356e] p-3 rounded mt-8">Get started today</button></Link>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Domains;
