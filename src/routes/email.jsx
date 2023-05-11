import Nav from "../components/Nav";

import SearchBar from "../components/email/SearchBar";

export default function Email() {
  return (
    <>
      <Nav />
      <section>
        <div className="py-5 md:py-24 w-full max-w-lg md:max-w-6xl max-xl:px-5 mx-auto md:flex justify-between">
          <div className="flex flex-col justify-center">
            <h1 className="small-title text-[#055d9c]">Stand out with<br />Professional Email.</h1>
            <p className="max-w-4xl md:text-lg font-normal mt-6">Build and grow your online presence with a custom domain and <br />personalized email address from WordPress.com.</p>
            <button className="my-5 bg-[#0675c4] text-white flex justify-center items-center w-40 h-12 rounded-md">Start your free trial</button>
            <p className="text-gray-500 text-sm">Free for the first 3 months.</p>
          </div>
          <div className="relative flex justify-center mr-5 max-md:my-10">
            <img className="w-[380px]" src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/woman@2x.jpg" alt="" w="380" h="570"/>
            <div className="absolute w-[380px] top-80 left-6">
              <SearchBar/>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#e9f0f5]">
        <div className="py-20 md:py-40 max-w-lg md:max-w-6xl max-xl:px-5 mx-auto flex flex-col items-center">
          <h2 className="small-title text-[#055d9c]">Your email. Your identity.</h2>
          <p className="font-normal my-6 text-gray-500 md:mb-20">Build your brand with every email you send. Starting from $3.50/month/mailbox.*</p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-20 text-gray-500 mb-14">
            {[{img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-blue-copyright.svg',
               title: 'Look professional.',
               text: 'Grab your domain name now so you don’t have to compromise later. Your domain is the starting step to a strong brand.'},
              {img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-blue-checkmarks.svg',
               title: 'Build trust.',
               text: 'Grab your domain name now so you don’t have to compromise later. Your domain is the starting step to a strong brand.'},
              {img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-blue-fingerprint.svg',
               title: 'Strengthen your brand.',
               text: 'Grab your domain name now so you don’t have to compromise later. Your domain is the starting step to a strong brand.'}
             ].map(item =>
                <div>
                  <img src={item.img} alt=""/>
                  <h3 className="text-[#044b7a] font-bold text-lg pt-5 pb-3">{item.title}</h3>
                  <p>{item.text}</p>
                </div>)}
          </div>
          <p className="text-gray-500">* Prices change based on region and exclude your domain name.</p>
        </div>
      </section>
      <section className="bg-[#008763] text-white">
        <div className="py-24 w-full max-w-lg md:max-w-6xl max-xl:px-5 mx-auto flex flex-col items-center">
          <div className="grid md:grid-cols-2 gap-10 md:gap-24 text-lg md:mb-14">
            <div className="flex flex-col justify-center">
              <h2 className="small-title mb-5">Simple and powerful.</h2>
              <p>With Professional Email Calendar and Contacts, stay on top of your schedule and never miss important events. Keep things organized and keep in touch with people.</p>
            </div>
            <div className="border boder-white rounded-lg pt-8">
              <div className="border-t border-white flex justify-center">
                <img src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/calendar-contacts.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center md:order-last">
              <h2 className="small-title mb-5">Get more done<br />in less time.</h2>
              <p>Power through your work day with email templates, scheduling, reminders, and more.</p>
            </div>
            <img className="border boder-white rounded-lg" src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/reminders@2x.png" alt="" />
          </div>
          <button className="my-5 bg-[#f5e6b3] text-black flex justify-center items-center w-40 h-12 rounded-md">Get started</button>
          <p>Choose a domain. Add an email address. Own your online brand.</p>
        </div>
      </section>
      <section>
        <div className="py-24 w-full max-w-lg md:max-w-6xl max-xl:px-5 mx-auto">
          <h2 className="small-title text-[#2c3338]">Supercharge your email.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 py-16 gap-10 md:gap-24">
            {perks.map(item =>
              <div className="max-md:flex flex-col items-center">
                <img src={item.img} alt="" />
                <h3 className="font-medium text-lg py-3 max-md:text-center">{item.title}</h3>
                <p className="text-gray-500 max-md:text-center">{item.text}</p>
              </div>)}
          </div>
          <div className="flex justify-center gap-3 text-gray-500 pb-12">Professional Email is powered by<img src="https://assets.a8c.vercel.app/static/titan-promo/logo-titan.svg" alt="" /></div>
        </div>
      </section>
      <section className="bg-[#bbe0fa]">
        <div className="py-24 w-full max-w-lg md:max-w-6xl max-xl:px-5 mx-auto">
          <h2 className="small-title pb-20">Communicate like a pro.</h2>
          <div className="grid gap-x-24 gap-y-10 md:grid-cols-2 mb-10 md:mb-24">
            <div>
              <img className="rounded-xl" src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/inbox@2x.jpg" alt="" />
              <h3 className="font-semibold text-3xl my-5">Access anywhere</h3>
              <p>With the Titan App for Professional Email, access your email, calendar, and contacts anytime and anywhere.</p>
            </div>
            <div>
              <img className="rounded-xl" src="https://wpcom.files.wordpress.com/2021/08/multiple-addresses402x.png" alt="" />
              <h3 className="font-semibold text-3xl my-5">Manage multiple inboxes</h3>
              <p>Working with multiple email addresses? Access them all from one place without jumping tabs or logging in and out.</p>
            </div>
          </div>
          <img className="md:max-w-5xl rounded-xl max-w-full" src="https://wpcom.files.wordpress.com/2021/07/calypso-mailbox402x.png" alt="" />
          <h3 className="font-semibold text-3xl my-5">Baked right into WordPress.com</h3>
          <p>Manage your email, domain, and websites from a single dashboard. </p>
        </div>
      </section>
      <section>
        <div className="py-24 w-full max-w-lg md:max-w-6xl max-xl:px-5 mx-auto text-[#055d9c] flex flex-col items-center">
          <h2 className="small-title mb-20">Try it free for 3 months</h2>
          <div className="grid md:grid-cols-3 gap-x-24 gap-y-10">
            {[{
                img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/step-create-account.svg',
                nr: 'ONE',
                title: 'Create an account.',
                text: 'Create your WordPress.com account to start your onboarding.'
              },
              {
                img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/step-choose-domain.svg',
                nr: 'TWO',
                title: 'Choose a domain.',
                text: 'Choose a domain address. Remember that this will also be used for your email address.'
              },
              {
                img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/step-add-email.svg',
                nr: 'THREE',
                title: 'Add a Professional Email.',
                text: 'Add a Professional Email to start your 3-months free trial.'
              }].map(item =>
                <div>
                  <img src={item.img} alt="" />
                  <p className="mt-6">STEP {item.nr}</p>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-3 text-gray-500">{item.text}</p>
                </div>)}
          </div>
          <button className="mt-20 bg-sky-600 text-white w-32 h-12">Let's go!</button>
        </div>
      </section>
      <section className="bg-[#f6f7f7]">
        <div className="py-16 md:py-32 w-full max-w-lg md:max-w-xl max-xl:px-5 mx-auto">
          <h2 className="small-title text-center text-gray-800">Migrate seamlessly. Don’t lose a beat.</h2>
          <p className="font-normal mt-6 text-gray-500 text-center">Bring your emails and contacts with you from other platforms and existing accounts. Professional Email makes pulling your old account data into your new inbox a breeze with its simple built-in migration tool.</p>
        </div>
      </section>
      <section className="bg-[#e4f2ed]">
        <div className="py-16 md:py-32 w-full max-w-lg md:max-w-6xl max-xl:px-5 mx-auto">
          <h2 className="small-title">Your happiness. Our pleasure.</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-12 text-gray-500 md:h-28">
            {[{text: 'It is a really good service of mail. It is a functional, reliable, well-built service. The look is also really nice!',
               author: 'Stefano Marchesotti'},
              {text: 'I used Gmail before and Titan is for me a very good email tool, I do not miss Gmail!',
               author: 'Graziano Nigro'},
              {text: 'Managing emails is simple, so is viewing emails. the possibility of having several addresses clearly visible at the same time is great.',
               author: 'Guylaine'}].map(item =>
                <div className="flex flex-col justify-between bg-white">
                  <p>"{item.text}"</p>
                  <p className="font-semibold">{item.author}</p>
                </div>)}
          </div>
        </div>
      </section>
      <section className="bg-[#e9f0f5]">
        <div className="py-16 md:py-32 w-full max-w-lg md:max-w-6xl max-xl:px-5 mx-auto flex flex-col items-center">
          <h2 className="small-title text-center text-[#044b7a]">Use the best email service.</h2>
          <p className="font-normal mt-6 text-gray-500 text-lg text-center">Professional Email’s platform, Titan, is the highest-rated email service for small business owners</p>
          <img src="https://wpcom.files.wordpress.com/2022/08/group-22672.png" alt="" width='410' height='63' className="py-8"/>
          <img src="https://wpcom.files.wordpress.com/2022/08/group-22671.png" alt="" width='530' height='120'/>
        </div>
      </section>
      <section>
        <div className="py-16 md:py-32 w-full max-w-lg md:max-w-6xl max-xl:px-5 mx-auto">
          <h2 className="small-title text-gray-800">You asked, we answered.</h2>
          <p className="font-normal mt-6 text-gray-500 text-lg">Learn more about Professional Email and the 3-month free trial.</p>
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-16 text-gray-500 mt-20">
            {[{title: 'What is WordPress.com?',
               text: 'Built by the people who created open-source WordPress software – which powers 42% of the websites on the internet – WordPress.com is the most flexible and powerful website building platform in the world.'},
              {title: 'Do I need a domain?',
               text: 'Yes. Your domain determines your Professional Email address – youremail@yourdomain.com. With your custom domain, you can both create a Professional Email account and set yourself apart.'},
              {title: 'What is Professional Email?',
               text: 'Professional Email is an email platform built by Titan, a strategic partner of Automattic (the creators of WordPress.com). With a custom email address and feature-rich web and mobile apps, Professional Email enables you to work smarter and more efficiently over email.'},
              {title: 'I already have a domain somewhere. How can I get Professional Email?',
               text: 'Once you create your account and transfer your domain into WordPress.com you can navigate to Upgrades > Emails to try Professional Email for free for 3 months.'},
              {title: 'How can I start using the 3-month free trial?',
               text: 'As an exclusive offer, you can try Professional Email free for 3 months when you purchase any new domain with WordPress.com. After the 3 months, your Professional Email account will renew at the regular price. ',},
              {title: 'I’m looking for some collaboration tools beyond email, calendar and contacts? Do you offer other product options?',
               text: 'Of course. If you’re looking for a collaboration suite, we also offer Google Workspace.'}].map(item =>
                <div>
                  <h3 className="font-bold text-lg mb-4 text-black">{item.title}</h3>
                  <p>{item.text}</p>
                </div>)}
          </div>
        </div>
      </section>
      <section className="bg-[#e4f2ed] text-[#005c44]">
        <div className="py-12 md:py-32 w-full max-w-lg md:max-w-6xl max-xl:px-5 mx-auto lg:flex gap-20">
          <div className="flex flex-col justify-center gap-6">
            <p>BEST IN CLASS</p>
            <h2 className="small-title">24/7 Support</h2>
            <p className="text-lg -mb-3">Get hands-on support from our experts through email or live chat.</p>
            <p className="text-lg">Whether you’re migrating from another provider or trying to create multiple email accounts we can always help. We’re excited to help you build and own your piece of the web.</p>
            <p className="font-medium underline text-lg">Visit our support center {'>'}</p>
          </div>
          <img src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/support@2x.jpg" alt="" width='528' height='428'/>
        </div>
      </section>
      <section className="bg-[#facfd2] text-[#4d2054]">
        <div className="py-12 md:py-32 w-full max-w-lg md:max-w-6xl max-xl:px-5 mx-auto">
          <h2 className="small-title">Create your professional online presence.</h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-32 text-lg mt-16">
            <div>
              <img className="rounded-xl" src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/plans@2x.jpg" alt=""/>
              <h3 className="text-3xl font-semibold mb-5 mt-8">Website plans for everyone.</h3>
              <p>We’ve got plans for book clubs, businesspeople, bird fanciers, Bond impersonators, bed and breakfast owners, sellers, and anyone else who wants to get online.</p>
              <p className="mt-4 font-semibold underline">Explore plans {'>'}</p>
            </div>
            <div>
              <img src="https://wpcom.files.wordpress.com/2022/01/email402x.jpg" alt=""/>
              <h3 className="text-3xl font-semibold mb-5 mt-8">Email at your domain.</h3>
              <p>Get a 3-months free trial with professional email. Build and grow your online presence with a custom domain and personalized email address from WordPress.com.</p>
              <p className="mt-4 font-semibold underline">Learn more {'>'}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#055d9c] text-white">
        <div className="py-32 w-full max-w-lg lg:max-w-6xl max-xl:px-5 mx-auto relative">
          <div className="bg-[url('https://s1.wp.com/wp-content/themes/h4/assets/logo-outlines/720.svg')] invert bg-no-repeat bg-right opacity-20 absolute -left-40 top-0 h-full w-[720px]"></div>
          <div className="relative lg:left-1/2 lg:ml-20 lg:w-2/5">
            <h2 className="small-title mb-8">Your domain.<br/> Your email.<br/> Your website.</h2>
            <p>WordPress powers more than 42% of the web. Join the <br/> community. We’re committed to helping you succeed.</p>
            <button className="bg-[#c9356e] p-3 rounded mt-8">Get started today</button>
          </div>
        </div>
      </section>
    </>
  )
};

const perks = [
  {
    title: '30 GB storage',
    text: 'The most space, for the best value.',
    img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-gray-cloud.svg'
  },
  {
    title: 'Guaranteed email delivery',
    text: 'Peace of mind with  99.98% uptime.',
    img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-gray-cloud.svg'
  },
  {
    title: 'IMAP, POP3, SMTP support',
    text: 'Full support for all email server settings.',
    img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-gray-cloud.svg'
  },
  {
    title: 'Advanced security',
    text: 'Data encryption, spam, and virus protection.',
    img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-gray-cloud.svg'
  },
  {
    title: 'Email templates',
    text: 'Send new emails without starting from scratch.',
    img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-gray-cloud.svg'
  },
  {
    title: 'Signature builder',
    text: 'Create your own signature.',
    img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-gray-cloud.svg'
  },
  {
    title: 'Scheduled sending',
    text: 'Take control of when your emails land.',
    img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-gray-cloud.svg'
  },
  {
    title: 'Advanced search',
    text: 'Search for anything, find everything.',
    img: 'https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-gray-cloud.svg'
  }
]
