import { Link } from 'react-router-dom';
import { useState } from 'react';

// plan : title, description, priceM , priceA
const plans = [
  {
    name: "Business",
    description: "Unlock the power of WordPress with plugins and cloud tools.",
    badge: "Best for devs",
    priceM: "40",
    priceY: "25",
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
    storage: 200,
    img: <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-business/media/cloud-logo.svg" alt='' width='31' height='18'/>
  },
  {
    name: "Commerce",
    description: "Sell products and process payments with an online store.",
    priceM: "70",
    priceY: "45",
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
    storage: 200,
    img: <img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-ecommerce/media/woo-logo.svg" alt='' width='30' height='19'/>
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
    <div className='flex flex-col items-center mt-8'>
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
      <div className='mt-20 grid bg-transparent max-md:max-w-sm md:grid-cols-3 max-xl:w-[800px] gap-y-16 bg-white text-black rounded-lg'>
        {plans.map((plan,idx) =>
          <div className='flex flex-col p-5 basis-full bg-white'>
            <div className='h-10 flex items-end'>{plan.img}</div>
            <h3 className='text-4xl font-serif'>{plan.name}</h3>
            <p className='text-xs mt-1 h-16'>{plan.description}</p>
            <p className='text-5xl font-serif'><sup className='text-base align-top relative top-[1px] mr-1'>€</sup>{activeButton === 'monthly' ? plan.priceM : plan.priceY}</p>
            <p className='text-xs py-1 text-gray-500'>{idx === 0 ? 'No expiration date' : 'per month, billed ' + activeButton}</p>
            <Link to='/start' className='button sticky top-2 font-medium bg-[#101517] text-white h-10 rounded-md my-4 text-sm flex items-center justify-center'>Get {plan.name}</Link>
            <p className='h-10 py-3 text-xs font-bold'>{idx != 0 ? `Everything in ${plans[idx-1].name}, plus:` : ''}</p>
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
        <div className='flex flex-col p-5 basis-full bg-[#101517] text-white rounded-r-lg'>
          <div className='h-10 flex items-end pb-1'><img className=' brightness-0 invert' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/vip-logo.svg" width='38' height='17' alt=''/></div>
          <h4 className='text-4xl font-serif'>Enterprise</h4>
          <p className='text-xs mt-1 h-16'>Deliver an unmatched performance with the highest security standards on our enterprise content platform.</p>
          <div className='h-12'></div>
          <p className='text-xs py-1'>Starts at <b>US$25,000</b> yearly.</p>
          <Link to="/start" className='button sticky top-2 font-medium bg-white text-black h-10 rounded-md my-4 text-sm flex items-center justify-center'>Get in touch</Link>
          <div className='flex flex-wrap gap-4 pt-4'>
            <img className=' brightness-0 invert' width='38' height='27' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/time-logo.svg" alt="time logo" />
            <img className=' brightness-0 invert' width='60' height='27' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/slack-logo.svg" alt="slack logo" />
            <img className=' brightness-0 invert' width='60' height='27' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/disney-logo.svg" alt="disney logo" />
            <img className=' brightness-0 invert' width='40' height='27' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/cnn-logo.svg" alt="cnn logo" />
            <img className=' brightness-0 invert' width='40' height='27' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/salesforce-logo.svg" alt="salesforce logo" />
            <img className=' brightness-0 invert' width='80' height='27' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/facebook-logo.svg" alt="facebook logo" />
            <img className=' brightness-0 invert' width='84' height='27' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/condenast-logo.svg" alt="condenast logo" />
            <img className=' brightness-0 invert' width='69' height='27' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/bloomberg-logo.svg" alt="bloomberg logo" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Plans
