import { useState } from "react"

const list = [
  {
    q: 'Do I need to know how to code to build a website on WordPress.com?',
    a: 'Nope. The WordPress.com Blocks Editor allows you to drag-and‑drop images into posts and pages, create designer‑worthy photo galleries, embed audio, video, documents, and more.\nWordPress.com is user-friendly and makes it possible to build a professional website without knowing how to code. Our editor is fast, intuitive, and includes HTML and Markdown support too.'
  },
  {
    q: 'Will I be able to sell online?',
    a: 'With a WordPress.com Business plan, you can sell individual items on your site with one-click payments. You can also create a full online store with rich eCommerce features, using WooCommerce.'
  },
  {
    q: 'Can I create a website in another language?',
    a: 'Absolutely. You can change your Site Language, which is the language your readers will experience at your site. You can also change the language you see while working on your site in the dashboard. The language you write on your website is up to you!'
  },
  {
    q: 'Will I have to pay for a custom domain for my website?',
    a: 'Your free website includes a subdomain: sitename.wordpress.com.\nYou can register a new custom domain or transfer an existing one to your free site, but you’ll need a paid WordPress.com plan to use it as your site’s main address. Every paid WordPress.com plan comes with a free domain for one year when paid annually.'
  },
  {
    q: 'Can I get an email account?',
    a: 'Yes! Try WordPress.com Professional Email free for three months. After that pricing starts at $3.50/month per mailbox. Learn more about Professional Email',
  },
  {
    q: 'Can i import content from another service?',
    a: 'It is possible to import your blog content from a variety of other blogging platforms, including Blogger, LiveJournal, Movable Type, Tumblr, Wix, Typepad, Xanga, and more. You can also import your content from a self-hosted WordPress site.'
  }
]

export default function Questions() {
  const [highlight,setHighlight] = useState(-1);
  return (
    <div className="max-w-2xl text-gray-600 text-lg">
      {list.map((item,idx) =>
        <div className="border-2 my-4 max-w-2xl">
          <div className="group py-3 px-5 flex items-center justify-between hover:opacity-70 cursor-pointer transition-all" onClick={() => {highlight === idx ? setHighlight(-1) : setHighlight(idx)}}>
            {item.q}
            <img src="https://cdn-icons-png.flaticon.com/512/561/561169.png" alt="" width='20' className={highlight === idx ? 'rotate-45' : 'group-hover:rotate-[22.5deg]'}/>
          </div>
          <div className={highlight === idx ? 'mb-3 mx-5' : 'h-0 text-transparent'}>
            {item.a}
          </div>
        </div>)}
    </div>
  )
}
