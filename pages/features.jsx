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
                  {card.icon}
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
        text: 'Kickstart your site by selecting from hundreds of pre-made, professionally-designed, customizable templates.',
        icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8h-1.5zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zM4.5 4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1V12l-2.3-1.7c-.3-.2-.6-.2-.9 0l-2.9 2.1L8 11.3c-.2-.1-.5-.1-.7 0l-2.9 1.5V4.6zm0 11.8v-1.8l3.2-1.7 2.4 1.2c.2.1.5.1.8-.1l2.8-2 2.8 2v2.5c0 .1-.1.1-.1.1H4.6c0-.1-.1-.2-.1-.2z" fill='white'></path></svg>
      },
      {
        title: 'Block Editor',
        text: 'Use intuitive drag-and-drop tools to easily arrange, rearrange, and organize your content and media.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"></path></svg>
      },
      {
        title: 'Pre-Built Block Patterns',
        text: 'Create great-looking layouts simply by inserting elegant pre-built block patterns into your pages and posts.',
        icon: <svg fill='white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"></path></svg>
      },
      {
        title: 'Advanced Design Tools',
        text: 'Customize your blog’s design with extended color schemes, typography, borders, and control over website CSS.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 20h8v-1.5H4V20zM18.9 3.5c-.6-.6-1.5-.6-2.1 0l-7.2 7.2c-.4-.1-.7 0-1.1.1-.5.2-1.5.7-1.9 2.2-.4 1.7-.8 2.2-1.1 2.7-.1.1-.2.3-.3.4l-.6 1.1H6c2 0 3.4-.4 4.7-1.4.8-.6 1.2-1.4 1.3-2.3 0-.3 0-.5-.1-.7L19 5.7c.5-.6.5-1.6-.1-2.2zM9.7 14.7c-.7.5-1.5.8-2.4 1 .2-.5.5-1.2.8-2.3.2-.6.4-1 .8-1.1.5-.1 1 .1 1.3.3.2.2.3.5.2.8 0 .3-.1.9-.7 1.3z"></path></svg>
      },
      {
        title: 'Upload Any Type of Media',
        text: 'Create designer-worthy photo galleries, embed audio, video, documents, and more—with storage space to spare.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"></path></svg>
      }
    ]
  },
  {
    title: 'Marketing',
    cards: [
      {
        title: 'Social Media Tools',
        text: 'Automatically send new posts to Facebook and Twitter and create shortlinks, social icons, and open graph tags.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z" clip-rule="evenodd"></path></svg>
      },
      {
        title: 'SEO Tools',
        text: 'Get found faster with powerful built-in SEO tools, and access to premium plugins including Yoast and Rank Math.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12.5 14.5h-1V16h1c2.2 0 4-1.8 4-4s-1.8-4-4-4h-1v1.5h1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5zm-4 1.5v-1.5h-1C6.1 14.5 5 13.4 5 12s1.1-2.5 2.5-2.5h1V8h-1c-2.2 0-4 1.8-4 4s1.8 4 4 4h1zm-1-3.2h5v-1.5h-5v1.5zM18 4H9c-1.1 0-2 .9-2 2v.5h1.5V6c0-.3.2-.5.5-.5h9c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5v-.5H7v.5c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"></path></svg>
      },
      {
        title: 'Email Marketing',
        text: 'Integrate your site with leading email marketing tools. Grow your list and send campaigns from day one.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12.5 14.5h-1V16h1c2.2 0 4-1.8 4-4s-1.8-4-4-4h-1v1.5h1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5zm-4 1.5v-1.5h-1C6.1 14.5 5 13.4 5 12s1.1-2.5 2.5-2.5h1V8h-1c-2.2 0-4 1.8-4 4s1.8 4 4 4h1zm-1-3.2h5v-1.5h-5v1.5zM18 4H9c-1.1 0-2 .9-2 2v.5h1.5V6c0-.3.2-.5.5-.5h9c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5v-.5H7v.5c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"></path></svg>
      },
      {
        title: 'Custom Domain Name',
        text: 'Get a personalized online address that’s easy to remember and easy to share—enjoy your first year free when you choose a paid annual plan.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.3c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8s-4-8.8-8.8-8.8zm6.5 5.5h-2.6C15.4 7.3 14.8 6 14 5c2 .6 3.6 2 4.5 3.8zm.7 3.2c0 .6-.1 1.2-.2 1.8h-2.9c.1-.6.1-1.2.1-1.8s-.1-1.2-.1-1.8H19c.2.6.2 1.2.2 1.8zM12 18.7c-1-.7-1.8-1.9-2.3-3.5h4.6c-.5 1.6-1.3 2.9-2.3 3.5zm-2.6-4.9c-.1-.6-.1-1.1-.1-1.8 0-.6.1-1.2.1-1.8h5.2c.1.6.1 1.1.1 1.8s-.1 1.2-.1 1.8H9.4zM4.8 12c0-.6.1-1.2.2-1.8h2.9c-.1.6-.1 1.2-.1 1.8 0 .6.1 1.2.1 1.8H5c-.2-.6-.2-1.2-.2-1.8zM12 5.3c1 .7 1.8 1.9 2.3 3.5H9.7c.5-1.6 1.3-2.9 2.3-3.5zM10 5c-.8 1-1.4 2.3-1.8 3.8H5.5C6.4 7 8 5.6 10 5zM5.5 15.3h2.6c.4 1.5 1 2.8 1.8 3.7-1.8-.6-3.5-2-4.4-3.7zM14 19c.8-1 1.4-2.2 1.8-3.7h2.6C17.6 17 16 18.4 14 19z"></path></svg>
      },
      {
        title: 'Reader',
        text: 'Connect with other likeminded bloggers—who might just be your next biggest fans, through our community hub.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 13.8h6v-1.5H7v1.5zM18 16V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zM5.5 16V4c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5zM7 10.5h8V9H7v1.5zm0-3.3h8V5.8H7v1.4zM20.2 6v13c0 .7-.6 1.2-1.2 1.2H8v1.5h11c1.5 0 2.7-1.2 2.7-2.8V6h-1.5z"></path></svg>
      },
      {
        title: 'WordPress.com Newsletter',
        text: 'Automatically send your new posts out as an email newsletter.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M6 5.5h12a.5.5 0 01.5.5v7H14a2 2 0 11-4 0H5.5V6a.5.5 0 01.5-.5zm-.5 9V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-3.5h-3.337a3.5 3.5 0 01-6.326 0H5.5zM4 13V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2v-5z" clip-rule="evenodd"></path></svg>
      },
      {
        title: 'Form Block',
        text: 'Easily insert a contact, appointment, event registration, or feedback form to your site.',
        icon: <svg fill='white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M14.5 17.5H9.5V16H14.5V17.5Z M14.5 8H9.5V6.5H14.5V8Z M7 3.5H17C18.1046 3.5 19 4.39543 19 5.5V9C19 10.1046 18.1046 11 17 11H7C5.89543 11 5 10.1046 5 9V5.5C5 4.39543 5.89543 3.5 7 3.5ZM17 5H7C6.72386 5 6.5 5.22386 6.5 5.5V9C6.5 9.27614 6.72386 9.5 7 9.5H17C17.2761 9.5 17.5 9.27614 17.5 9V5.5C17.5 5.22386 17.2761 5 17 5Z M7 13H17C18.1046 13 19 13.8954 19 15V18.5C19 19.6046 18.1046 20.5 17 20.5H7C5.89543 20.5 5 19.6046 5 18.5V15C5 13.8954 5.89543 13 7 13ZM17 14.5H7C6.72386 14.5 6.5 14.7239 6.5 15V18.5C6.5 18.7761 6.72386 19 7 19H17C17.2761 19 17.5 18.7761 17.5 18.5V15C17.5 14.7239 17.2761 14.5 17 14.5Z"></path></svg>
      }
    ]
  },
  {
    title: 'Extensibility',
    cards: [
      {
        title: 'Plugins',
        text: 'Extend the functionality of your site with the click of a button. With over 50,000 plugins, if you can dream it, we’ve got it.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"></path></svg>
      },
      {
        title: 'Spam Protection with Akismet',
        text: 'Prevent unwanted comments to ensure that your site remains professional and trustworthy.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      },
      {
        title: 'Jetpack Search',
        text: 'Deliver high quality, relevant search results to your most engaged visitors.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path></svg>
      }
    ]
  },
  {
    title: 'Monetization Tools',
    cards: [
      {
        title: 'Collect Payments',
        text: 'Accept payments for just about anything—from goods and services to memberships and donations.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm-1.338 4.877c-.314.22-.412.452-.412.623 0 .171.098.403.412.623.312.218.783.377 1.338.377.825 0 1.605.233 2.198.648.59.414 1.052 1.057 1.052 1.852 0 .795-.461 1.438-1.052 1.852-.41.286-.907.486-1.448.582v.316a.75.75 0 01-1.5 0v-.316a3.64 3.64 0 01-1.448-.582c-.59-.414-1.052-1.057-1.052-1.852a.75.75 0 011.5 0c0 .171.098.403.412.623.312.218.783.377 1.338.377s1.026-.159 1.338-.377c.314-.22.412-.452.412-.623 0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377-.825 0-1.605-.233-2.198-.648-.59-.414-1.052-1.057-1.052-1.852 0-.795.461-1.438 1.052-1.852a3.64 3.64 0 011.448-.582V7.5a.75.75 0 011.5 0v.316c.54.096 1.039.296 1.448.582.59.414 1.052 1.057 1.052 1.852a.75.75 0 01-1.5 0c0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377s-1.026.159-1.338.377z"></path></svg>
      },
      {
        title: 'Word Ads',
        text: 'Earn ad revenue by connecting your site with the biggest ad publishers, including Google AdSense, and more.',
        icon: <svg fill='white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z"></path></svg>
      },
      {
        title: 'Premium Content Block',
        text: 'Create additional, premium content exclusive to your paying subscribers.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z" clip-rule="evenodd"></path></svg>
      },
      {
        title: 'Paid Newsletters',
        text: 'Email premium content to paying subscribers.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M16.83 6.342l.602.3.625-.25.443-.176v12.569l-.443-.178-.625-.25-.603.301-1.444.723-2.41-.804-.475-.158-.474.158-2.41.803-1.445-.722-.603-.3-.625.25-.443.177V6.215l.443.178.625.25.603-.301 1.444-.722 2.41.803.475.158.474-.158 2.41-.803 1.445.722zM20 4l-1.5.6-1 .4-2-1-3 1-3-1-2 1-1-.4L5 4v17l1.5-.6 1-.4 2 1 3-1 3 1 2-1 1 .4 1.5.6V4zm-3.5 6.25v-1.5h-8v1.5h8zm0 3v-1.5h-8v1.5h8zm-8 3v-1.5h8v1.5h-8z" clip-rule="evenodd"></path></svg>
      }
    ]
  },
  {
    title: 'Reliability',
    cards: [
      {
        title: '24/7 Expert Support',
        text: 'Whenever you’re stuck, whatever you’re trying to make happen—our Happiness Engineers have the answers on hand.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M17.375 15.656A6.47 6.47 0 0018.5 12a6.47 6.47 0 00-.943-3.374l-1.262.813c.448.749.705 1.625.705 2.561a4.977 4.977 0 01-.887 2.844l1.262.813zm-1.951 1.87l-.813-1.261A4.976 4.976 0 0112 17c-.958 0-1.852-.27-2.613-.736l-.812 1.261A6.47 6.47 0 0012 18.5a6.47 6.47 0 003.424-.974zm-8.8-1.87A6.47 6.47 0 015.5 12c0-1.235.344-2.39.943-3.373l1.261.812A4.977 4.977 0 007 12c0 1.056.328 2.036.887 2.843l-1.262.813zm2.581-7.803A4.977 4.977 0 0112 7c1.035 0 1.996.314 2.794.853l.812-1.262A6.47 6.47 0 0012 5.5a6.47 6.47 0 00-3.607 1.092l.812 1.261zM12 20a8 8 0 100-16 8 8 0 000 16zm0-4.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" clip-rule="evenodd"></path></svg>
      },
      {
        title: 'Unmetered Bandwidth and Traffic',
        text: 'All our plans include Unmetered Bandwidth, which means there’s no limit on the number of visitors to your site.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.43c-2.27 0-4.4.7-5.98 1.98a.71.71 0 1 1-.9-1.11C6.97 2.82 9.41 2 12 2s5.03.82 6.87 2.3a.71.71 0 0 1-.9 1.11A9.53 9.53 0 0 0 12 3.43Zm9.8 8.07-1.44-1.43a.71.71 0 1 0-1 1l.2.22h-6.13c-.05 0-.1 0-.15.02a2 2 0 0 1-.03.01 1.42 1.42 0 0 0-1.25-.75c-.53 0-.98.3-1.23.72H4.44l.2-.21a.71.71 0 1 0-1-1.01L2.2 11.49a.71.71 0 0 0 0 1.01l1.43 1.43a.71.71 0 0 0 1 0 .71.71 0 0 0 0-1l-.2-.22h6.33a1.42 1.42 0 0 0 2.48-.03h.03l.15.03h6.13l-.2.21a.71.71 0 1 0 1 1.01l1.43-1.43a.71.71 0 0 0 0-1Zm-3.82 7.09A9.54 9.54 0 0 1 12 20.57a9.5 9.5 0 0 1-5.98-1.98.71.71 0 0 0-.9 1.1A10.96 10.96 0 0 0 12 22c2.59 0 5.03-.82 6.87-2.3a.71.71 0 1 0-.9-1.11ZM7.27 17.56a.71.71 0 0 1 .9-1.12c1.01.82 2.37 1.27 3.83 1.27s2.82-.45 3.84-1.27a.71.71 0 1 1 .9 1.12A7.55 7.55 0 0 1 12 19.14a7.55 7.55 0 0 1-4.73-1.58Zm7.32-2.15a.71.71 0 1 0-.9-1.1 3 3 0 0 1-3.39 0 .71.71 0 0 0-.9 1.1c.7.57 1.63.88 2.6.88a4.1 4.1 0 0 0 2.59-.88Zm1.7-7.7a.71.71 0 0 0 .44-1.27A7.56 7.56 0 0 0 12 4.86c-1.78 0-3.46.56-4.73 1.58a.71.71 0 1 0 .9 1.12c1.01-.82 2.38-1.27 3.83-1.27s2.82.45 3.84 1.27a.71.71 0 0 0 .45.15ZM9.3 9.6a.71.71 0 0 1 .11-1 4.1 4.1 0 0 1 2.6-.88c.96 0 1.88.31 2.58.88a.71.71 0 1 1-.9 1.11 2.91 2.91 0 0 0-3.38 0 .71.71 0 0 1-1-.11Z"></path></svg>
      },
      {
        title: 'Jetpack Backups and Restores',
        text: 'Easily restore or download a backup of your site from a specific moment in time.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3c-4.95 0-9 4.05-9 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9Zm-.56 10.69h-4.5l4.5-9v9Zm1.12 5.62v-9h4.5l-4.5 9Z"></path></svg>
      }
    ]
  },
  {
    title: 'Performance',
    cards: [
      {
        title: 'Hosting Optimized for WordPress',
        text: 'A managed hosting service that has been 100% committed to optimizing the WordPress experience for more than 15 years.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" aria-hidden="true" focusable="false"><path d="M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"></path></svg>
      },
      {
        title: 'Global CDN',
        text: 'Our 28+ data centers across 6 continents put your content as close to your visitors as possible, so your site is always lightning fast.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.3c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8s-4-8.8-8.8-8.8zm6.5 5.5h-2.6C15.4 7.3 14.8 6 14 5c2 .6 3.6 2 4.5 3.8zm.7 3.2c0 .6-.1 1.2-.2 1.8h-2.9c.1-.6.1-1.2.1-1.8s-.1-1.2-.1-1.8H19c.2.6.2 1.2.2 1.8zM12 18.7c-1-.7-1.8-1.9-2.3-3.5h4.6c-.5 1.6-1.3 2.9-2.3 3.5zm-2.6-4.9c-.1-.6-.1-1.1-.1-1.8 0-.6.1-1.2.1-1.8h5.2c.1.6.1 1.1.1 1.8s-.1 1.2-.1 1.8H9.4zM4.8 12c0-.6.1-1.2.2-1.8h2.9c-.1.6-.1 1.2-.1 1.8 0 .6.1 1.2.1 1.8H5c-.2-.6-.2-1.2-.2-1.8zM12 5.3c1 .7 1.8 1.9 2.3 3.5H9.7c.5-1.6 1.3-2.9 2.3-3.5zM10 5c-.8 1-1.4 2.3-1.8 3.8H5.5C6.4 7 8 5.6 10 5zM5.5 15.3h2.6c.4 1.5 1 2.8 1.8 3.7-1.8-.6-3.5-2-4.4-3.7zM14 19c.8-1 1.4-2.2 1.8-3.7h2.6C17.6 17 16 18.4 14 19z"></path></svg>
      },
      {
        title: 'High Frequency CPUs',
        text: 'WordPress.com sites run highly performant CPUs to generate pages at incredible speeds.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.25 3a.75.75 0 0 1 .75.75V5h.44c.89 0 1.21.1 1.54.27.32.17.58.43.75.75.16.3.26.6.27 1.35V8h1.25a.75.75 0 1 1 0 1.5H19v1.75h1.25a.75.75 0 1 1 0 1.5H19v1.75h1.25a.75.75 0 1 1 0 1.5H19v.44c0 .89-.1 1.21-.27 1.54a1.8 1.8 0 0 1-.75.75c-.3.16-.6.26-1.35.27H16v1.25a.75.75 0 1 1-1.5 0V19h-1.75v1.25a.75.75 0 1 1-1.5 0V19H9.5v1.25a.75.75 0 1 1-1.5 0V19h-.44c-.89 0-1.21-.1-1.54-.27a1.82 1.82 0 0 1-.75-.75A2.7 2.7 0 0 1 5 16.63V16H3.75a.75.75 0 1 1 0-1.5H5v-1.75H3.75a.75.75 0 1 1 0-1.5H5V9.5H3.75a.75.75 0 0 1 0-1.5H5v-.44c0-.89.1-1.21.27-1.54.17-.32.43-.58.75-.75.3-.16.6-.25 1.35-.27H8V3.75a.75.75 0 0 1 1.5 0V5h1.75V3.75a.75.75 0 1 1 1.5 0V5h1.75V3.75a.75.75 0 0 1 .75-.75Zm1.71 3.5H7.14c-.22 0-.3.02-.38.07a.45.45 0 0 0-.2.19.59.59 0 0 0-.06.28v9.82c0 .22.02.3.07.38a.45.45 0 0 0 .19.2c.08.04.16.06.38.06h9.72c.22 0 .3-.02.38-.07a.45.45 0 0 0 .2-.19c.04-.08.06-.16.06-.38V7.14c0-.22-.02-.3-.07-.38a.45.45 0 0 0-.19-.2.59.59 0 0 0-.28-.06ZM14.72 8c.44 0 .6.05.77.13.16.1.29.22.37.38.1.17.14.33.14.77v5.44c0 .44-.05.6-.13.77a.9.9 0 0 1-.38.38c-.17.08-.33.13-.77.13H9.28c-.44 0-.6-.05-.77-.13a.9.9 0 0 1-.38-.38 1.57 1.57 0 0 1-.13-.77V9.28c0-.44.05-.6.13-.77a.9.9 0 0 1 .38-.38c.17-.08.33-.13.77-.13h5.44Zm-.22 1.5h-5v5h5v-5Z"></path></svg>
      },
      {
        title: 'Superior Image Management',
        text: 'WordPress.com creates image thumbnails on the fly and transparently compresses data at rest.',
        icon: <svg fill='white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      },
      {
        title: 'Automated Burst Scaling',
        text: 'Our custom resource management system automatically scales to over 100 PHP workers.',
        icon: <svg fill='white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      }
    ]
  },
  {
    title: 'Security',
    cards: [
      {
        title: 'DDoS and WAF Protection',
        text: 'WordPress.com blocks millions of malicious requests daily so you can sleep through takeover and hacking attempts.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      },
      {
        title: 'Malware Scanning and Removal',
        text: 'Stay one step ahead of security threats with automated malware scanning and one‑click fixes.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.13 5.5l1.926 1.927A4.975 4.975 0 007.025 10H5v1.5h2V13H5v1.5h2.1a5.002 5.002 0 009.8 0H19V13h-2v-1.5h2V10h-2.025a4.979 4.979 0 00-1.167-2.74l1.76-1.76-1.061-1.06-1.834 1.834A4.977 4.977 0 0012 5.5c-1.062 0-2.046.33-2.855.895L7.19 4.44 6.13 5.5zm2.37 5v3a3.5 3.5 0 107 0v-3a3.5 3.5 0 10-7 0z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      },
      {
        title: 'Account Security Tools',
        text: 'Keep your user accounts secure with our built-in two-factor authentication and compromised password scanning.',
        icon: <svg fill='white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm-2.8 0H9.8V7c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v3z"></path></svg>
      }
    ]
  },
  {
    title: 'Stats & Insights',
    cards: [
      {
        title: 'Jetpack Stats',
        text: 'Monitor your site traffic and engagement from the moment you hit publish.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3c-4.95 0-9 4.05-9 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9Zm-.56 10.69h-4.5l4.5-9v9Zm1.12 5.62v-9h4.5l-4.5 9Z"></path></svg>
      },
      {
        title: 'Google Analytics',
        text: 'Access in-depth data on how and why people come to your site without writing a single line of code.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M11.25 5h1.5v15h-1.5V5zM6 10h1.5v10H6V10zm12 4h-1.5v6H18v-6z" clip-rule="evenodd"></path></svg>
      }
    ]
  },
  {
    title: 'Site Management',
    cards: [
      {
        title: 'Post by Email',
        text: 'Publish blog posts on-the-go with the quick send of an email.',
        icon: <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M11.25 5h1.5v15h-1.5V5zM6 10h1.5v10H6V10zm12 4h-1.5v6H18v-6z" clip-rule="evenodd"></path></svg>
      },
      {
        title: 'Post Scheduling',
        text: 'Schedule your posts in advance.',
        icon: <svg fill='white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"></path></svg>
      },
      {
        title: 'Related Posts',
        text: 'Provide automated content recommendations to visitors based on what they’ve already read.',
        icon: <svg fill='white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      }
    ]
  }
];

