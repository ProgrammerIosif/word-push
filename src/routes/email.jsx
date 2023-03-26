import Nav from "../components/Nav";

import SearchBar from "../components/email/SearchBar";

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
    </>
  )
};

export default Email;