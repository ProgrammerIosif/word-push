import Link from 'next/link.js';

import Nav from '@/components/Nav'
import Footer from '@/components/Footer';

import Plans from '@/components/hosting/Plans'

export default function Hosting() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#0b4f7b] to-[#101517] text-white">
        <Nav/>
        <div className="pt-24 w-full max-w-4xl max-xl:px-5 mx-auto pb-20">
          <h1>HOSTING</h1>
          <h2 className="title mt-5">Basically, the best<br/>managed WordPress<br/>hosting on the planet</h2>
          <p className="text-lg font-normal mt-6 max-w-lg">Whatever you need. Whatever you’re trying to get done. There’s a feature for that on WordPress.com.</p>
          <p className="text-lg font-normal mt-4">Meet WordPress.com managed hosting.</p>
          <Link href="/start"><button className="mt-6 bg-white text-black flex justify-center items-center w-36 h-12 rounded-md">Get Started</button></Link>
        </div>
      </section>
      <section className='bg-[#101517] text-white'>
        {features.map(section =>
          <div className='w-full max-w-4xl max-xl:px-5 mx-auto py-10'>
            <h3 className='uppercase text-[#1689db] font-semibold'>{section.title}</h3>
            <p className='font-serif text-4xl mt-3'>{section.subtitle}</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10'>
              {section.list.map(item =>
                <div>
                  <div className='flex gap-4 items-center'>
                    <div className='h-5 w-5 text-[#1689db] shrink-0'>
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8h-1.5zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zM4.5 4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1V12l-2.3-1.7c-.3-.2-.6-.2-.9 0l-2.9 2.1L8 11.3c-.2-.1-.5-.1-.7 0l-2.9 1.5V4.6zm0 11.8v-1.8l3.2-1.7 2.4 1.2c.2.1.5.1.8-.1l2.8-2 2.8 2v2.5c0 .1-.1.1-.1.1H4.6c0-.1-.1-.2-.1-.2z" fill='#1689db'></path>
                      </svg>
                    </div>
                    <h4 className='uppercase font-bold'>{item.title}</h4>
                  </div>
                  <p className='text-[#9da0a3] pt-3'>{item.text}</p>
                </div>)}
            </div>
            <Link href="/start"><button className='w-80 max-w-full h-12 border border-opacity-40 border-[#007cba] my-20 rounded hover:underline'>{section.button}</button></Link>
          </div>)}
        <h2 className='title w-full max-w-4xl max-xl:px-5 mx-auto'>What other builders are saying</h2>
        <div className='py-16 overflow-x-scroll'>
          <div className='max-w-4xl m-auto max-xl:px-5'>
            <div className='grid grid-cols-[repeat(6_,min(80vw_,566px))] w-fit'>
              {[
                {
                  text: 'From quickly updating our page to implementing our online store, our WordPress.com site has become the online center for everything we do.',
                  name: 'Eric K.'
                },
                {

                  text: 'With WordPress.com, you’re in good hands. Your site has the speed it needs. It won’t go offline. And it’s not going to be hacked. When it comes to the difficult stuff — it’s all taken care of.',
                  name: 'Chris Coyier'
                },
                {

                  text: 'WordPress.com has given me a platform to reach thousands of people. With my WordPress site, I feel like a professional.',
                  name: 'Lorilin Meyer'
                },
                {
                  text: 'My entire life has been invested in the written word, printing and publishing. WordPress.com is the best resource I have ever used.',
                  name: 'Guy H.'
                },
                {
                  text: 'I didn’t want to build a site, I want to build a solution. I wanted full customization and today [on WP.com] the site looks exactly how I want it to look.',
                  name: 'Sam'
                },
                {
                  text: 'It’s been a great privilege and a life-changing experience. I’m grateful to WordPress.com for providing an affordable and user-friendly platform for individuals to launch projects and be heard in this way.',
                  name: 'Ann Morgan'
                }
              ].map(item =>
                <div className='h-72 p-8 mr-4 rounded-lg bg-[#2c3338] flex flex-col justify-between'>
                  <q className='sm:text-2xl font-serif'>{item.text}</q>
                  <p>{item.name}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gradient-to-b from-[#101517] via-[#0a3552] to-[#141517] text-white'>
        <div className="pt-24 w-full max-w-3xl max-xl:px-5 mx-auto pb-20 flex flex-col items-center">
          <h2 className="font-serif text-6xl mt-5 text-center">Pick a plan and start building</h2>
          <p className="text-lg font-normal mt-6 text-center">Whatever you’re building, do it on top of the world’s best managed WordPress hosting stack. No overages. No metering. No surprises.</p>
          <Plans/>
        </div>
      </section>
      <Footer/>
    </>
  )
}

const features = [
  {
    title: 'Performance',
    subtitle: 'Full-stack performance',
    list: [
      {
        title: 'High-frequency cpus',
        text: 'WordPress.com sites run highly performant CPUs to process WordPress and WooCommerce-specific queries at incredible speeds.'
      },
      {
        title: 'Superior image management',
        text: 'Save money on storage, without sacrificing performance. WordPress.com creates image thumbnails on the fly and transparently compresses data at rest.'
      },
      {
        title: 'Automated burst scaling',
        text: 'Cruise through any traffic spike without breaking a sweat. Our custom resource management system automatically scales to over 100 PHP workers.'
      },
      {
        title: 'Global CDN',
        text: 'Our 25+ data centers across 6 continents put your content as close to your visitors as possible. Every single time.'
      }
    ],
    button: 'Build on lightning-fast hosting'
  },
  {
    title: 'Security',
    subtitle: 'Seriously secure',
    list: [
      {
        title: 'DDOS and WAF protection',
        text: 'WordPress.com blocks millions of malicious requests daily so you can sleep through takeover and hacking attempts.'
      },
      {
        title: 'Malware scanning and removal',
        text: 'Stay one step ahead of security threats with automated malware scanning and one-click fixes.'
      },
      {
        title: 'Real-time activity log',
        text: 'Stay on top of everything that happens on your site with our real-time activity log. If it happened, you’ll know about it. Any time of night or day.'
      },
      {
        title: 'Free SSL certificate',
        text: 'Take your site from HTTP to HTTPS at no additional cost. We encrypt every domain registered and connected to WordPress.com with a free SSL certificate.'
      }
    ],
    button: 'Build on a highly secure platform'
  },
  {
    title: 'Reliability',
    subtitle: 'Failure isn’t an option',
    list: [
      {
        title: 'Unmetered bandwidth and traffic',
        text: 'Don’t worry about unexpected success. WordPress.com sites aren’t metered based on bandwidth or traffic, regardless of your plan.'
      },
      {
        title: 'Real-time backup with one-click restore',
        text: 'Every part of your site is backed up in real time. Need to restore a missing file? It’s just a single click.'
      },
      {
        title: 'Automated data center failover',
        text: 'Every WordPress.com site is replicated in real-time to a second data center in a different region. This architecture ensures 99.999% uptime for your sites.'
      },
      {
        title: '24/7 Expert Support',
        text: 'Whenever you’re stuck, whatever you’re trying to make happen – our Happiness Engineers have the answers.'
      }
    ],
    button: 'Building on a rock-solid infrastructure'
  },
  {
    title: 'Extensibility',
    subtitle: 'Built for builders. By builders',
    list: [
      {
        title: 'Plugins, themes, and custom code',
        text: 'Start with full support for over 50,000+ plugins and themes to build on. Or start from scratch with your own custom plugins, themes, and code.'
      },
      {
        title: 'SSH, WP-CLI, and Git',
        text: 'Run WP-CLI commands, automate repetitive tasks and troubleshoot your custom code. All that with the tools you already use.'
      },
      {
        title: 'Multi-site management',
        text: 'Seamlessly shift between two sites or 20. Manage multiple sites with our unified Sites page, all from one place.'
      },
      {
        title: 'jetpack advanced features',
        text: 'More than 5 million users trust Jetpack to level up their sites with additional security, performance, and growth features.'
      }
    ],
    button: 'Build on a platform that loves builders'
  }
]
