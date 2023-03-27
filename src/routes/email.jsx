import Nav from "../components/Nav";

import SearchBar from "../components/email/SearchBar";

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

function Email() {
  return (
    <>
      <Nav />  
      <section className="">
        <div className="py-24 w-full max-w-6xl max-xl:px-5 mx-auto flex justify-between">
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-6xl text-[#055d9c]">Stand out with<br />Professional Email.</h1>
            <p className="max-w-4xl text-lg font-normal mt-6">Build and grow your online presence with a custom domain and <br />personalized email address from WordPress.com.</p>
            <button className="my-5 bg-[#0675c4] text-white flex justify-center items-center w-40 h-12 rounded-md">Start your free trial</button>
            <p className="text-gray-500 text-sm">Free for the first 3 months.</p>
          </div>
          <div className="relative">
            <img className="w-[380px]" src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/woman@2x.jpg" alt="" w="380" h="570"/>
            <div className="absolute w-[380px] top-80 left-12">
              <SearchBar/>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#e9f0f5]">
        <div className="py-40 max-w-6xl max-xl:px-5 mx-auto flex flex-col items-center">
          <h2 className="font-serif text-6xl text-[#055d9c]">Your email. Your identity.</h2>
          <p className="font-normal mt-6 text-gray-500 mb-20">Build your brand with every email you send. Starting from $3.50/month/mailbox.*</p>
          <div className="grid grid-cols-3 gap-20 text-gray-500 mb-14">
            <div className="">
              <img src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-blue-copyright.svg" alt="" />
              <h3 className="text-[#044b7a] font-bold text-lg pt-5 pb-3">Look professional.</h3>
              <p>With a custom email address (i.e. hello@artfulbaker.blog) they’ll know you mean business.</p>
            </div>
            <div>
              <img src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-blue-checkmarks.svg" alt="" />
              <h3 className="text-[#044b7a] font-bold text-lg pt-5 pb-3">Build trust.</h3>
              <p>Leave generic email addresses behind and project a confident, trust-building image to everyone who gets in touch.</p>
            </div>
            <div>
              <img src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/icon-blue-fingerprint.svg" alt="" />
              <h3 className="text-[#044b7a] font-bold text-lg pt-5 pb-3">Strengthen your brand.</h3>
              <p>A customized email address reinforces your brand with every email you send.</p>
            </div>
          </div>
          <p className="text-gray-500">* Prices change based on region and exclude your domain name.</p>
        </div>
      </section>
      <section className="bg-[#008763] text-white">
        <div className="py-24 w-full max-w-6xl max-xl:px-5 mx-auto flex flex-col items-center">
          <div className="grid grid-cols-2 gap-24 text-lg mb-14">
            <div className="flex flex-col justify-center">
              <h2 className="text-6xl font-serif mb-5">Simple and powerful.</h2>
              <p>With Professional Email Calendar and Contacts, stay on top of your schedule and never miss important events. Keep things organized and keep in touch with people.</p>
            </div>
            <div className="border boder-white rounded-lg pt-8">
              <div className="border-t border-white flex justify-center">
                <img src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/calendar-contacts.svg" alt="" />
              </div>
            </div>
            <img className="border boder-white rounded-lg" src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/reminders@2x.png" alt="" />
            <div className="flex flex-col justify-center">
              <h2 className="text-6xl font-serif mb-5">Get more done<br />in less time.</h2>
              <p>Power through your work day with email templates, scheduling, reminders, and more.</p>
            </div>
          </div>
          <button className="my-5 bg-[#f5e6b3] text-black flex justify-center items-center w-40 h-12 rounded-md">Get started</button>
          <p>Choose a domain. Add an email address. Own your online brand.</p>
        </div>
      </section>
      <section>
        <div className="py-24 w-full max-w-6xl max-xl:px-5 mx-auto">
          <h2 className="font-serif text-6xl font-light text-[#2c3338]">Supercharge your email.</h2>
          <div className="grid grid-cols-4 py-16 gap-24">
            {perks.map(item => 
              <div> 
                <img src={item.img} alt="" />
                <h3 className="font-medium text-lg pr-24 py-3">{item.title}</h3>
                <p className="text-gray-500">{item.text}</p>
              </div>)}
          </div>
          <div className="flex justify-center gap-3 text-gray-500 pb-12">Professional Email is powered by<img src="https://assets.a8c.vercel.app/static/titan-promo/logo-titan.svg" alt="" /></div>
        </div>
      </section>
      <section className="bg-[#bbe0fa]">
        <div className="py-24 w-full max-w-6xl max-xl:px-5 mx-auto">
          <h2 className="font-serif text-6xl pb-20">Communicate like a pro.</h2>
          <div className="grid gap-24 grid-cols-2">
            <div>
              <img className="rounded-xl" src="https://s1.wp.com/wp-content/themes/h4/assets/titan-promo/inbox@2x.jpg" alt="" />
              <h3 className="font-semibold text-3xl my-5">Access anywhere</h3>
              <p>With the Titan App for Professional Email, access your email, calendar, and contacts anytime and anywhere.</p>
            </div>
            <div className="pr-12">
              <img className="rounded-xl" src="https://wpcom.files.wordpress.com/2021/08/multiple-addresses402x.png" alt="" />
              <h3 className="font-semibold text-3xl my-5">Manage multiple inboxes</h3>
              <p>Working with multiple email addresses? Access them all from one place without jumping tabs or logging in and out.</p>
            </div>
          </div>
          <img className="max-w-5xl rounded-xl pt-24" src="https://wpcom.files.wordpress.com/2021/07/calypso-mailbox402x.png" alt="" />
          <h3 className="font-semibold text-3xl my-5">Baked right into WordPress.com</h3>
          <p>Manage your email, domain, and websites from a single dashboard. </p>
        </div>
      </section>
      <section>
        <div className="py-24 w-full max-w-6xl max-xl:px-5 mx-auto text-[#055d9c] flex flex-col items-center">
          <h2 className="text-6xl font-serif mb-20">Try it free for 3 months</h2>
          <div className="grid grid-cols-3 gap-24">
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
    </>
  )
};

export default Email;