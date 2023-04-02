import Nav from '../components/Nav'

import SearchwithImage from '../components/domains/SearchwithImage'

const Domains = () => {
  return (
    <>
      <Nav />
      <section>
        <div className="py-24 w-full max-w-6xl max-xl:px-5 mx-auto flex justify-between">
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-6xl text-[#055d9c]">Stand out with<br />Professional Email.</h1>
            <p className="max-w-4xl text-lg font-normal mt-6">Build and grow your online presence with a custom domain and <br />personalized email address from WordPress.com.</p>
            <button className="my-5 bg-[#0675c4] text-white flex justify-center items-center w-40 h-12 rounded-md">Start your free trial</button>
            <p className="text-gray-500 text-sm">Free for the first 3 months.</p>
          </div>
          <SearchwithImage/>
        </div>
      </section>
    </>
  )
}

export default Domains;
