import { useState } from 'react';

// plan : title, description, priceM , priceA
const plans = [
  {
    name: "Free",
    description: "Get a taste of the world’s most popular CMS & blogging software.",
    badge: false,
    priceM: "0",
    priceY: "0",
    buttonColor: "bg-[#0675c4]",
    textColor: "text-[#0675c4]",
    features: [
      "Dozens of free themes",
      "Basic design customization",
      "Community support"
    ],
    tools: [
      "Visitor stats",
      "Spam protection with Akismet",
      "Limited shares in social media",
      "Contact form"
    ],
    storage: 1
  },
  {
    name: "Personal",
    description: "Create your home on the web with a custom domain name.",
    badge: false,
    priceM: "9",
    priceY: "4",
    buttonColor: "bg-[#055d9c]",
    textColor: "text-[#055d9c]",
    features: [
      "Free domain for one year",
      "Email & live chat support",
      "Unlimited premium themes",
      "Advanced design customization",
      "6 GB storage space",
      "Remove WordPress.com ads"
    ],
    tools:[
      "Paid subscribers",
      "Premium content gating"
    ],
    storage: 6
  },
  {
    name: "Premium",
    description: "Build a unique website with powerful design tools.",
    badge: "Popular",
    priceM: "18",
    priceY: "8",
    buttonColor: "bg-[#004687]",
    textColor: "text-[#004687]",
    features: [
      "Free domain for one year",
      "Email & live chat support",
      "Unlimited premium themes",
      "Advanced design customization",
      "13 GB storage space",
      "Remove WordPress.com ads",
      "Payment button",
      "VideoPress support"
    ],
    tools: [
      "4K Videos with VideoPress",
      "Unlimited shares in social media",
      "Site activity log"
    ],
    storage: 13
  },
  {
    name: "Business",
    description: "Unlock the power of WordPress with plugins and cloud tools.",
    badge: "Best for devs",
    priceM: "40",
    priceY: "25",
    buttonColor: "bg-[#7f54b3]",
    textColor: "text-[#7f54b3]",
    features: [
      "Free domain for one year",
      "Email & live chat support",
      "Unlimited premium themes",
      "Advanced design customization",
      "200 GB storage space",
      "Remove WordPress.com ads",
      "Payment button",
      "VideoPress support",
      "Google Analytics",
      "SEO Tools"
    ],
    tools: [
      "Real-time backups",
      "One-click restores",
      "Uptime monitor",
      "Built-in Elastic Search",
      "Plugin auto-updates",
      "Tools for SEO"
    ],
    storage: 200
  },
  {
    name: "Commerce",
    description: "Sell products and process payments with an online store.",
    priceM: "70",
    priceY: "45",
    buttonColor: "bg-[#004687]",
    textColor: "text-[#004687]",
    features: [
      "Free domain for one year",
      "Email & live chat support",
      "Unlimited premium themes",
      "Advanced design customization",
      "200 GB storage space",
      "Remove WordPress.com ads",
      "Payment button",
      "VideoPress support",
      "Google Analytics",
      "SEO Tools",
      "eCommerce integration",
      "Accept payments in 60+ countries",
      "Integrations with top shipping carriers",
      "Premium customization"
    ],
    tools:[],
    storage: 200
  }
];

function Plans() {
  const [activeButton, setActiveButton] = useState('monthly');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const buttonClasses =
    'inline-block px-3 py-2 font-medium transition-colors rounded-full duration-300 text-center text-black';

  return (
    <div className='flex flex-col items-center'>
      {/* button */}
      <div className="flex items-center border rounded-full bg-gray-300 hover:bg-gray-200 p-0.5 transition-colors w-max">
        <button
          className={`${buttonClasses} ${
            activeButton === 'monthly'
              ? 'bg-white'
              : ''
          }`}
          onClick={() => handleButtonClick('monthly')}
        >
          Pay Monthly
        </button>
        <button
          className={`${buttonClasses} ${
            activeButton === 'annually'
              ? 'bg-white'
              : ''
          }`}
          onClick={() => handleButtonClick('annually')}
        >
          Pay Annually
        </button>
      </div>

      {/* table */}
      <div className='mt-20 grid grid-cols-3 max-xl:w-[800px] gap-y-16 xl:grid-cols-6'>
        {plans.map((plan,idx) => 
          <div className={`flex flex-col border border-r-0 border-gray-200 relative p-5 basis-full ${idx === 2 || idx === 3 ? '-mt-8' : ''}`}>
            <span className={`${idx === 2 || idx === 3 ? '-mt-2 mb-6' : ''}  bg-black text-white font-medium text-xs w-max rounded-sm px-2`}>{idx === 2 ? 'Popular' : idx === 3 ? 'Best for devs' : ''}</span>
            <div className='h-10 flex items-end'>{idx === 3 ? <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-business/media/cloud-logo.svg" alt=''/> :
                                                  idx === 4 ? <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-ecommerce/media/woo-logo.svg" alt=''/> : ''}</div>
            <h3 className='text-4xl font-serif'>{plan.name}</h3>
            <p className='text-xs mt-1 h-16'>{plan.description}</p>
            <h5 className='text-5xl font-serif'><sup className='text-base align-top relative top-[1px] mr-1'>€</sup>{activeButton === 'monthly' ? plan.priceM : plan.priceY}</h5>
            <p className='text-xs py-1 text-gray-500'>{idx === 0 ? 'No expiration date' : 'per month, billed ' + activeButton}</p>
            <button  className={`sticky top-2 font-medium ${plan.buttonColor} text-white h-10 rounded-md my-4 text-sm`}>{idx === 0 ? 'Start with Free' : 'Get ' + plan.name}</button>
            <p className={`h-10 py-3 text-xs ${plan.textColor} font-bold`}>{idx != 0 ? `Everything in ${plans[idx-1].name}, plus:` : ''}</p>
            <ul>
            {plan.features.map(feature => <li className={`${feature === "Free domain for one year" && activeButton === 'monthly' ? 'line-through font-bold' : feature === "Free domain for one year" ? 'font-bold' : ''} text-xs mb-4`}>{feature}</li>)}
            </ul>
            {plan.tools.length != 0 ? <img width='16' height='16' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan/media/jetpack-logo.svg" alt="" className='py-2'/> : <></>}
            <ul>
              {plan.tools.map(tool => <li className='text-xs mb-4'>{tool}</li>)}
            </ul>
            <div className='grow'></div>
            <p className='text-xs font-normal py-5'>STORAGE <br /><br/><span className='bg-gray-100 py-2 px-3 text-xs rounded-lg'>{plan.storage} GB</span></p>
          </div>)} 
        <div className='flex flex-col border border-gray-200 relative p-5 basis-full'>
          <div className='h-10 flex items-end pb-1'><img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/vip-logo.svg" alt=''/></div>
          <h4 className='text-4xl font-serif'>Enterprise</h4>
          <p className='text-xs mt-1 h-16'>Deliver an unmatched performance with the highest security standards on our enterprise content platform.</p>
          <div className='h-12'></div>
          <p className='text-xs py-1'>Starts at <b>US$25,000</b> yearly.</p>
          <button  className='sticky top-2 font-medium bg-[#2c3338] text-white h-10 rounded-md my-4 text-sm'>Get in touch</button>
          <div className='flex flex-wrap gap-4 pt-4'>
            <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/time-logo.svg" alt="time logo" />
            <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/slack-logo.svg" alt="slack logo" />
            <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/disney-logo.svg" alt="disney logo" />
            <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/cnn-logo.svg" alt="cnn logo" />
            <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/salesforce-logo.svg" alt="salesforce logo" />
            <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/facebook-logo.svg" alt="facebook logo" />
            <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/condenast-logo.svg" alt="condenast logo" />
            <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/bloomberg-logo.svg" alt="bloomberg logo" />
          </div>
        </div>
      </div>
      <div className='mt-10 py-2 rounded border border-gray-300 text-sm font-semibold px-10'>Compare Plans {'>'}</div>
    </div>
  );
}


export default Plans
