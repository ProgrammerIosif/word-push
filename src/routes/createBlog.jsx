import Blocks from "../components/createBlog/Blocks"

import Nav from "../components/Nav"
import Questions from "../components/Questions"

export default function CreateBlog() {
  return (
    <>
      <section className="bg-[#101517] text-white">
        <Nav />
        <div className="pt-12 md:pt-32 section">
          <h1 className="title">Blog with the best.</h1>
          <p className="max-w-4xl text-lg font-normal mt-6">More bloggers and independent creators choose WordPress than any other blogging tool. Tap into intuitive, flexible tools that put writers, bloggers, and creators first.</p>
          <button className="mt-10 bg-white text-black flex justify-center items-center w-40 h-14 rounded-md">Start blogging</button>
          <video width='1200' height='600' className="relative my-16 border-[10px] border-gray-200 rounded-3xl shadow-2xl" src="https://s1.wp.com/wp-content/themes/h4/assets/block-editor/2022-10@2x.mp4" autoPlay loop></video>
        </div>
      </section>
      <section className="bg-white -mt-60">
        <div className="pt-64 md:pt-80 section">
          <h2 className="title">Simple meet flexible.</h2>
          <p className="max-w-4xl text-lg font-normal mt-6">Whatever you’re publishing. Whoever your audience is. WordPress.com makes it simple to get started. And easy to expand your site as your audience grows.</p>
          <div className="flex gap-5">
            <button className="mt-10 bg-[#101517] text-white flex justify-center items-center w-40 h-14 rounded-md">Start blogging</button>
            <button className="mt-10 border border-black/50 flex justify-center items-center w-40 h-14 rounded-md">Find your theme</button>
          </div>
          <div className="grid grid-cols-1
                          md:grid-cols-2 gap-12 md:gap-24 py-12 md:py-24">
            <img className="md:order-last" src="https://wpcom.files.wordpress.com/2022/12/create-blog-window-camera.jpg" alt="" height='528' width='528' />
            <Blocks color="black" content={blocks1} />
          </div>
          <img className="relative md:my-16 border-[10px] border-gray-200 rounded-3xl shadow-2xl" src="https://wpcom.files.wordpress.com/2022/12/create-blog-wang-cheung.jpg" />
        </div>
      </section>
      <section className="bg-[#101517] text-white -mt-40 md:-mt-[500px]">
        <div className="pt-60 md:pt-[600px] section">
          <h2 className="title">You do you.</h2>
          <p className="max-w-lg text-lg font-normal mt-6">You’ve got more on your plate than running a blog. WordPress.com meets you where you are.</p>
          <div className="flex gap-5">
            <button className="mt-10 bg-white text-black flex justify-center items-center w-40 h-14 rounded-md">Start blogging</button>
            <button className="mt-10 border border-white flex justify-center items-center w-40 h-14 rounded-md">Find your theme</button>
          </div>
          <div className="grid grid-cols-1
                          md:grid-cols-2 gap-12 md:gap-24 py-12 md:py-24">
            <img src="https://wpcom.files.wordpress.com/2022/12/create-blog-turntable.jpg" alt="" height='528' width='528' />
            <Blocks color="white" content={blocks2} />
          </div>
        </div>
      </section>
      <section className="bg-[#f6f7f7]">
        <div className="pt-16 md:pt-32 w-full section">
          <h2 className="title">See and be seen.</h2>
          <p className="max-w-3xl text-lg font-normal mt-6">You made it. Now it’s time to get it in front of people. With baked in SEO tools, a bustling community, one-click social links, and a bunch of easy ways to get paid, you’re all set.</p>
          <div className="flex gap-5">
            <button className="mt-10 bg-black text-white flex justify-center items-center w-40 h-14 rounded-md">Start blogging</button>
            <button className="mt-10 border border-black flex justify-center items-center w-40 h-14 rounded-md">Find your theme</button>
          </div>
          <div className="mb-32 grid grid-cols-1 gap-y-12 gap-x-20 mt-12 md:mt-24
                          md:grid-cols-2">
            {[{
              title: 'SEO, to go',
              img: <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12.5 14.5h-1V16h1c2.2 0 4-1.8 4-4s-1.8-4-4-4h-1v1.5h1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5zm-4 1.5v-1.5h-1C6.1 14.5 5 13.4 5 12s1.1-2.5 2.5-2.5h1V8h-1c-2.2 0-4 1.8-4 4s1.8 4 4 4h1zm-1-3.2h5v-1.5h-5v1.5zM18 4H9c-1.1 0-2 .9-2 2v.5h1.5V6c0-.3.2-.5.5-.5h9c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5v-.5H7v.5c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"></path></svg>,
              text: 'Get found faster thanks to built-in search engine optimization tools. Clean URLs, automatic sitemaps, and custom titles and descriptions help put your blog at the top of the stack in search results.'
            },
            {
              title: 'Find your audience',
              img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-2.25 6v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM9.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill-rule="evenodd"></path></svg>,
              text: 'Say hello to a huge community of bloggers, creators, and avid readers, every time you publish. WordPress.com’s built-in Reader means millions of people can easily find, follow, and share your blog.'
            },
            {
              title: 'Take it to social',
              img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z" clip-rule="evenodd"></path></svg>,
              text: 'Put the word out on social media with no extra work. Set up automatic social updates once. Then leave it to WordPress.com to update Facebook, Twitter, LinkedIn, and Tumblr every time you hit publish.'
            },
            {
              title: 'Get paid for what you made',
              img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M5.5 9.5v-2h13v2h-13zm0 3v4h13v-4h-13zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z" clip-rule="evenodd"></path></svg>,
              text: 'Let your audience support your hard work with built-in monetization tools. From shipping out merch to selling downloadable content, taking donations to offering subscriptions and memberships. Everything you need to collect payments is baked right in.'
            }
            ].map(item =>
              <div>
                <div className="w-14 h-14 bg-black grid place-items-center rounded-full">
                  <div className="w-10 h-10 invert">
                    {item.img}
                  </div>
                </div>
                <h3 className="font-serif text-4xl my-4">
                  {item.title}
                </h3>
                {item.text}
              </div>)}
          </div>
          <img src="https://wpcom.files.wordpress.com/2022/12/create-blog-chapter-one.png" alt="" />
        </div>
      </section>
      <section className="bg-[#e9f0f5] -mt-28 md:-mt-52">
        <div className="pt-52 md:pt-80 section">
          <h2 className="title">People love WordPress.com.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-12 pb-14 md:pb-28">
            {[{
              text: 'Over the years, I’ve acquired a gratifying number of readers and followers, with more arriving each day, and I owe much of that audience to the tools and opportunities that WordPress.com provides.',
              name: 'Alec N.'
            },
            {
              text: 'WordPress.com has allowed me to present my content in an attractive way. It’s given me a platform to reach thousands of people. It’s made people notice me and what I write… With my WordPress site, I feel like a professional.',
              name: 'Lorilin M.'
            },
            {
              text: 'My entire life has been invested in the written word, printing and publishing. WordPress.com is the best resource I have ever used.',
              name: 'Guy H.'
            }].map(item =>
              <div className="flex flex-col gap-5">
                <q>{item.text}</q>
                <b>{item.name}</b>
              </div>)}
          </div>
        </div>
      </section>
      <section>
        <div className="pt-16 md:pt-28 section">
          <h2 className="title">You're in control.</h2>
          <p className="max-w-4xl text-lg font-normal mt-6">Whatever you’re publishing. Whoever your audience is. WordPress.com makes it simple to get started. And easy to expand your site as your audience grows.</p>
          <div className="flex gap-5">
            <button className="mt-10 bg-[#101517] text-white flex justify-center items-center w-40 h-14 rounded-md">Start blogging</button>
            <button className="mt-10 border border-black/50 flex justify-center items-center w-40 h-14 rounded-md">Find your theme</button>
          </div>
          <div className="grid grid-cols-1
                          md:grid-cols-2 gap-12 md:gap-24 py-12 md:py-24">
            <img className="md:order-last" src="https://wpcom.files.wordpress.com/2022/12/create-blog-scooter.jpg" alt="" height='528' width='528' />
            <Blocks color="black" content={blocks3} />
          </div>
        </div>
      </section>
      <section className="bg-[#e9f0f5]">
        <div className="py-16 md:py-32 section">
          <h2 className="title">Everything you need in one place.</h2>
          <p className="max-w-4xl text-lg font-normal mt-6">Your WordPress.com site comes with all the most popular blogging tools—and then some.</p>
          {features.map(section =>
            <div>
              <h2 className="text-3xl mt-10 md:mt-20 mb-8 font-serif">{section.title}</h2>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
                {section.cards.map(card =>
                  <div className="bg-white rounded-lg p-7">
                    <div className="h-9 w-9 bg-black p-1.5 rounded-full">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8h-1.5zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zM4.5 4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1V12l-2.3-1.7c-.3-.2-.6-.2-.9 0l-2.9 2.1L8 11.3c-.2-.1-.5-.1-.7 0l-2.9 1.5V4.6zm0 11.8v-1.8l3.2-1.7 2.4 1.2c.2.1.5.1.8-.1l2.8-2 2.8 2v2.5c0 .1-.1.1-.1.1H4.6c0-.1-.1-.2-.1-.2z" fill='white'></path>
                      </svg>
                    </div>
                    <h3 className="font-bold my-4 text-lg">{card.title}</h3>
                    <p className="text-black/70">{card.text}</p>
                  </div>)}
              </div>
            </div>)}
        </div>
      </section>
      <section>
        <div className="py-16 md:py-32 section grid place-items-center gap-10">
          <h2 className="title">You asked, we answered.</h2>
          <Questions list={questions} />
        </div>
      </section>
      <section className="bg-[#055d9c] text-white">
        <div className="py-32 section max-lg:max-w-lg relative">
          <div className="bg-[url('https://s1.wp.com/wp-content/themes/h4/assets/logo-outlines/720.svg')] invert bg-no-repeat bg-right opacity-30 absolute -left-40 top-0 h-full w-[720px]"></div>
          <div className="relative lg:left-1/2 lg:ml-20 lg:w-2/5">
            <h2 className="font-serif text-5xl max-w-lg mb-5">Join the millions of creators publishing with WordPress.com.</h2>
            <p>Build your blog—and your audience—with the same tool that powers almost half the web. Built on lightning-fast, seriously secure, hassle-free hosting. That’s WordPress.com.</p>
            <button className="bg-white text-[#055d9c] p-3 rounded mt-5">Start blogging.</button>
          </div>
        </div>
      </section>

    </>
  )
}

const questions = [
  {
    q: 'Does it cost money to start a blog?',
    a: 'You can always get started blogging for free with the WordPress.com free plan, which includes our best-in-class hosting. Our various paid plans unlock additional features perfect for personal use, freelancers, small businesses, and online stores. Find the right plan for your blogging needs.'
  },
  {
    q: 'Will I have to pay for a custom domain name for my website?',
    a: 'Your free website includes a subdomain: sitename.wordpress.com /n You can register a new custom domain name or transfer an existing one to your free site, but you’ll need a paid WordPress.com plan to use it as your site’s main address. Every paid WordPress.com plan comes with a free domain for one year when paid annually.'
  },
  {
    q: 'How do bloggers earn money?',
    a: 'There are a lot of ways to earn money with your blog. You can earn ad revenue, share affiliate links, sell digital goods and services, accept donations and tips, create premium content accessible only to paid subscribers, and more. Learn more about how WordPress.com helps you monetize your blog.'
  },
  {
    q: 'Is there a difference between a blog and a website?',
    a: 'On WordPress.com we use “website” and “blog” as interchangeable terms. Any site you create on WordPress.com can be formatted as a static page or a blog. Some websites dedicate a separate section to work as a blog.'
  },
  {
    q: 'Can I import my content to WordPress.com from another platform?',
    a: 'Yes! WordPress.com makes it quick and easy to import your content from other blogging or website platforms including Squarespace, Wix, Blogger, and more. You can also import your content from a self-hosted WordPress site. Find out how to import your site’s content.'
  },
  {
    q: 'Can I have someone build a WordPress.com site for me?',
    a: 'Yes, we have a custom web design service called Built By WordPress.com. You tell us about the site you envision, and we’ll work closely with you to design and build your site. The end result will be fully customized for you.'
  },
  {
    q: 'Where can I lear more?',
    a: 'Head over to our support site for more information and tips on getting started.'
  }
]

const blocks1 = [
  {
    title: 'Blog beautifully',
    text: 'Customize your blog’s look and feel in a couple of clicks with beautifully designed themes. Bring your writing to life with magical drag-and-drop layouts. Or put your fingerprint on every font, color, and element on the page.'
  },
  {
    title: 'Edit easily',
    text: 'From simple and clean to glossy magazine – whatever your publishing style, the intuitive block editor adapts to you. Drag, drop, and easily swap out your menu, punch in a pull quote, or make your post pop with a beautiful gallery. Just like that.'
  },
  {
    title: 'Share anything, simly',
    text: 'From video to audio, stories to GIFs, bring it all together—right from where you write. And with plenty of storage for every type of media, your content’s secure, easy to reuse anywhere on your blog, and owned by you alone.'
  }
]

const blocks2 = [
  {
    title: 'Blog from anywhere',
    text: 'The Jetpack mobile app for iOS and Android puts total control of your blog a tap and swipe away. Wherever you are at the time.'
  },
  {
    title: 'Write now, publish later',
    text: 'With post-scheduling, you can catch your readers at the best time for them. And for you. Write up a post, dial in a date, then leave it to your blog to hit publish.'
  },
  {
    title: 'Track your site stats',
    text: 'Skim your site stats with an at-a-glance dashboard. Or dig into the details of exactly what’s resonating with your readers with charts, graphs, and deep-dive data.'
  }
]

const blocks3 = [
  {
    title: 'Own your content',
    text: 'Blogs should belong to creators, not platforms. With WordPress.com, every word, every photo, and every thought you share belongs to you. And only you. That means you can easily export your entire blog and take it anywhere, at any time.'
  },
  {
    title: 'Seriously secure',
    text: 'Your blog’s in safe hands. With a dedicated security team, firewalls, encryption, brute force, and DDoS protection. So when you blog with WordPress.com, security’s all in place. All by default.'
  },
  {
    title: 'Lightning-fast speeds',
    text: 'Unlike our competitors, WordPress.com focuses on doing only one thing really well: hosting blazing-fast WordPress sites, all over the world. So you’ll never lose a follower to a slow site or risk your blog going down with a sudden traffic spike.'
  }
]

const features = [
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
    title: 'Design & Editing Tools',
    cards: [
      {
        title: 'Beautiful Themes',
        text: 'Kickstart your site by selecting from hundreds of pre-made, professionally-designed, customizable templates.',
      },
      {
        title: 'Block Editor',
        text: 'Use intuitive drag-and-drop tools to easily arrange, rearrange, and organize your content and media.'
      },
      {
        title: 'Advanced Design Tools',
        text: 'Customize your blog’s design with extended color schemes, typography, borders, and control over website CSS.'
      },
      {
        title: 'Pre-Built Block Patterns',
        text: 'Create great-looking layouts simply by inserting elegant pre-built block patterns into your pages and posts.'
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
        title: 'SEO Tools',
        text: 'Get found faster with powerful built-in SEO tools, and access to premium plugins including Yoast and Rank Math.'
      },
      {
        title: 'Social Media Tools',
        text: 'Automatically send new posts to Facebook and Twitter and create shortlinks, social icons, and open graph tags.'
      },
      {
        title: 'Form Block',
        text: 'Easily insert a contact, appointment, event registration, or feedback form to your site.'
      },
      {
        title: 'WordPress.com Newsletter',
        text: 'Automatically send your new posts out as an email newsletter.'
      },
      {
        title: 'Reader',
        text: 'Connect with other likeminded bloggers—who might just be your next biggest fans, through our community hub.'
      },
      {
        title: 'Custom Domain Name',
        text: 'Get a personalized online address that’s easy to remember and easy to share—enjoy your first year free when you choose a paid annual plan.'
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
        title: 'Spam Protection with Akismet',
        text: 'Prevent unwanted comments to ensure that your site remains professional and trustworthy.'
      },
      {
        title: 'Jetpack Backups and Restores',
        text: 'Easily restore or download a backup of your site from a specific moment in time.'
      },
      {
        title: 'Related Posts',
        text: 'Provide automated content recommendations to visitors based on what they’ve already read.'
      },
      {
        title: 'Jetpack Search',
        text: 'Deliver high quality, relevant search results to your most engaged visitors.'
      }
    ]
  }
];
