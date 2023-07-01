import Link from "next/link";

import Footer from "@/components/Footer";

export default function Features() {
  return (
    <div className="bg-[#101517] text-white">
      <Nav/>
      <div className="pt-12 md:pt-32 w-full max-w-sm xs:max-w-xl md:max-w-6xl max-xl:px-5 mx-auto mb-32">
        <h1 className="title">Everything.<br />Every. Single. Thing.</h1>
        <p className="max-w-4xl text-lg font-normal mt-6">Whatever you need. Whatever you’re trying to get done. <br/> There’s a feature for that on WordPress.com.</p>
        <Link href="/start"><button className="mt-10 bg-[#0675c4] text-white flex justify-center items-center w-32 h-12 rounded-md">Start building</button></Link>
        {features.map(section =>
          <div>
            <h2 className="text-3xl mt-20 mb-8 font-serif">{section.title}</h2>
            <div className="w-full grid xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
              {section.cards.map(card =>
                <div className="bg-[#2c3338] text-white rounded-lg p-5 md:p-7">
                  <div className="h-9 w-9 bg-black p-1.5 rounded-full">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                      <path d="M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8h-1.5zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zM4.5 4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1V12l-2.3-1.7c-.3-.2-.6-.2-.9 0l-2.9 2.1L8 11.3c-.2-.1-.5-.1-.7 0l-2.9 1.5V4.6zm0 11.8v-1.8l3.2-1.7 2.4 1.2c.2.1.5.1.8-.1l2.8-2 2.8 2v2.5c0 .1-.1.1-.1.1H4.6c0-.1-.1-.2-.1-.2z" fill='white'></path>
                    </svg>
                  </div>
                  <h3 className="font-bold my-2 md:my-4 text-lg">{card.title}</h3>
                  <p className="text-[#c3c4c7] max-md:text-sm">{card.text}</p>
                </div>)}
            </div>
          </div>)}
      </div>
      <div className="py-20 md:py-40 bg-[url(https://wpcom.files.wordpress.com/2023/02/mesh-blue-2.png)] bg-cover">
        <div className="w-full max-w-sm xs:max-w-xl md:max-w-6xl max-xl:px-5 mx-auto">
          <h1 className="font-serif text-6xl">Have it all.</h1>
          <p className="max-w-sm text-lg font-normal mt-4">Beauty. Speed. Simplicity. And the power to grow. You don’t need to choose.</p>
          <Link href="/start"><button className="mt-6 text-black bg-white flex justify-center items-center w-32 h-12 rounded-md">Start building</button></Link>
        </div>
      </div>
    <Footer/>
    </div>
  )
}

import Nav from "@/components/Nav";

const features = [
  {
    title: 'Design & Editing Tools',
    cards: [
      {
        title: 'Beautiful Themes',
        text: 'Kickstart your site by selecting from hundreds of pre-made, professionally-designed, customizable templates.'
      },
      {
        title: 'Block Editor',
        text: 'Use intuitive drag-and-drop tools to easily arrange, rearrange, and organize your content and media.'
      },
      {
        title: 'Pre-Built Block Patterns',
        text: 'Create great-looking layouts simply by inserting elegant pre-built block patterns into your pages and posts.'
      },
      {
        title: 'Advanced Design Tools',
        text: 'Customize your blog’s design with extended color schemes, typography, borders, and control over website CSS.'
      },
      {
        title: 'Upload Any Type of Media',
        text: 'Create designer-worthy photo galleries, embed audio, video, documents, and more—with storage space to spare.'
      }
    ]
  },
  {
    title: 'Marketing',
    cards: [
      {
        title: 'Social Media Tools',
        text: 'Automatically send new posts to Facebook and Twitter and create shortlinks, social icons, and open graph tags.'
      },
      {
        title: 'SEO Tools',
        text: 'Get found faster with powerful built-in SEO tools, and access to premium plugins including Yoast and Rank Math.'
      },
      {
        title: 'Email Marketing',
        text: 'Integrate your site with leading email marketing tools. Grow your list and send campaigns from day one.'
      },
      {
        title: 'Custom Domain Name',
        text: 'Get a personalized online address that’s easy to remember and easy to share—enjoy your first year free when you choose a paid annual plan.'
      },
      {
        title: 'Reader',
        text: 'Connect with other likeminded bloggers—who might just be your next biggest fans, through our community hub.'
      },
      {
        title: 'WordPress.com Newsletter',
        text: 'Automatically send your new posts out as an email newsletter.'
      },
      {
        title: 'Form Block',
        text: 'Easily insert a contact, appointment, event registration, or feedback form to your site.'
      }
    ]
  },
  {
    title: 'Extensibility',
    cards: [
      {
        title: 'Plugins',
        text: 'Extend the functionality of your site with the click of a button. With over 50,000 plugins, if you can dream it, we’ve got it.'
      },
      {
        title: 'Spam Protection with Akismet',
        text: 'Prevent unwanted comments to ensure that your site remains professional and trustworthy.'
      },
      {
        title: 'Jetpack Search',
        text: 'Deliver high quality, relevant search results to your most engaged visitors.'
      }
    ]
  },
  {
    title: 'Monetization Tools',
    cards: [
      {
        title: 'Collect Payments',
        text: 'Accept payments for just about anything—from goods and services to memberships and donations.'
      },
      {
        title: 'Word Ads',
        text: 'Earn ad revenue by connecting your site with the biggest ad publishers, including Google AdSense, and more.'
      },
      {
        title: 'Premium Content Block',
        text: 'Create additional, premium content exclusive to your paying subscribers.'
      },
      {
        title: 'Paid Newsletters',
        text: 'Email premium content to paying subscribers.'
      }
    ]
  },
  {
    title: 'Reliability',
    cards: [
      {
        title: '24/7 Expert Support',
        text: 'Whenever you’re stuck, whatever you’re trying to make happen—our Happiness Engineers have the answers on hand.'
      },
      {
        title: 'Unmetered Bandwidth and Traffic',
        text: 'All our plans include Unmetered Bandwidth, which means there’s no limit on the number of visitors to your site.'
      },
      {
        title: 'Jetpack Backups and Restores',
        text: 'Easily restore or download a backup of your site from a specific moment in time.'
      }
    ]
  },
  {
    title: 'Performance',
    cards: [
      {
        title: 'Hosting Optimized for WordPress',
        text: 'A managed hosting service that has been 100% committed to optimizing the WordPress experience for more than 15 years.'
      },
      {
        title: 'Global CDN',
        text: 'Our 28+ data centers across 6 continents put your content as close to your visitors as possible, so your site is always lightning fast.'
      },
      {
        title: 'High Frequency CPUs',
        text: 'WordPress.com sites run highly performant CPUs to generate pages at incredible speeds.'
      },
      {
        title: 'Superior Image Management',
        text: 'WordPress.com creates image thumbnails on the fly and transparently compresses data at rest.'
      },
      {
        title: 'Automated Burst Scaling',
        text: 'Our custom resource management system automatically scales to over 100 PHP workers.'
      }
    ]
  },
  {
    title: 'Security',
    cards: [
      {
        title: 'DDoS and WAF Protection',
        text: 'WordPress.com blocks millions of malicious requests daily so you can sleep through takeover and hacking attempts.'
      },
      {
        title: 'Malware Scanning and Removal',
        text: 'Stay one step ahead of security threats with automated malware scanning and one‑click fixes.'
      },
      {
        title: 'Account Security Tools',
        text: 'Keep your user accounts secure with our built-in two-factor authentication and compromised password scanning.'
      }
    ]
  },
  {
    title: 'Stats & Insights',
    cards: [
      {
        title: 'Jetpack Stats',
        text: 'Monitor your site traffic and engagement from the moment you hit publish.'
      },
      {
        title: 'Google Analytics',
        text: 'Access in-depth data on how and why people come to your site without writing a single line of code.'
      }
    ]
  },
  {
    title: 'Site Management',
    cards: [
      {
        title: 'Post by Email',
        text: 'Publish blog posts on-the-go with the quick send of an email.'
      },
      {
        title: 'Post Scheduling',
        text: 'Schedule your posts in advance.'
      },
      {
        title: 'Related Posts',
        text: 'Provide automated content recommendations to visitors based on what they’ve already read.'
      }
    ]
  }
];

