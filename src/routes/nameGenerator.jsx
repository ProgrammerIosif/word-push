import Nav from "../components/Nav";

const NameGenerator = () => {
  return (
    <>
      <section className="bg-[#007e65] text-white">
        <Nav/>
        <div className="py-20 md:py-32 section md:max-w-3xl grid place-items-center">
          <h1 className="text-5xl font-semibold text-center">The business name generator</h1>
          <p className="text-center my-12">You’ve got an idea. Now it needs a name. The WordPress.com company name generator is a one‑stop tool to get you started.</p>
          <div className="bg-white w-full p-1 rounded flex items-center relative md:mt-12">
            <input className="w-full pr-24 bg-white p-2 text-black focus-visible:outline focus-visible:outline-blue-600 focus-visible:outline-2 rounded-sm" type="text" name="name"/>
            <img className="absolute right-3" src="https://cdn-icons-png.flaticon.com/512/7079/7079548.png" alt="" height='24' width='24'/>
          </div>
        </div>
      </section>
      <section>
        <div className="py-12 md:py-24 section grid place-items-center text-[#303b4f]">
          <h2 className="text-3xl font-semibold mb-3">How it works.</h2>
          <p className="text-center max-w-3xl">Are you starting a new online store? A brick-and-mortar salon? Your freelance gig? No matter what you’re creating, the business name generator can help you find a name. Plus it’s free and easy to use.</p>
          <div className="grid md:grid-cols-2 w-full px-12 gap-10 md:gap-20 mt-16">
            {[{icon: <svg fill='currentColor' className="w-full h-full" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20 12c0-.568-.06-1.122-.174-1.656l1.834-1.612-2-3.464-2.322.786c-.82-.736-1.787-1.308-2.86-1.657L14 2h-4l-.48 2.396c-1.07.35-2.04.92-2.858 1.657L4.34 5.268l-2 3.464 1.834 1.612C4.06 10.878 4 11.432 4 12s.06 1.122.174 1.656L2.34 15.268l2 3.464 2.322-.786c.82.736 1.787 1.308 2.86 1.657L10 22h4l.48-2.396c1.07-.35 2.038-.92 2.858-1.657l2.322.786 2-3.464-1.834-1.613c.113-.535.174-1.09.174-1.657zm-8 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></g></svg>,
               title:'Start brainstorming',
               text: 'Start by entering a few relevant keywords for your business or brand.'},
              {icon: <svg className="w-full h-full" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-6 8h12v3H6zm14-8h-4V3H8v3H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM10 5h4v5h-4zm10 14H4v-9h4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h4z"></path></g></svg>,
               title: 'Pick your name',
               text: 'The company name generator will generate dozens of creative options.'},
              {icon: <svg className="w-full h-full" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.918 6h-3.215c-.188-1.424-.42-2.65-.565-3.357 1.593.682 2.916 1.87 3.78 3.357zm-5.904-3.928c.068.352.387 2.038.645 3.928h-3.32c.26-1.89.578-3.576.646-3.928C11.32 4.03 11.656 4 12 4s.68.03 1.014.072zM14 12c0 .598-.043 1.286-.11 2h-3.78c-.067-.714-.11-1.402-.11-2s.043-1.286.11-2h3.78c.067.714.11 1.402.11 2zM8.862 4.643C8.717 5.35 8.485 6.576 8.297 8H5.082c.864-1.487 2.187-2.675 3.78-3.357zM4.262 10h3.822c-.05.668-.084 1.344-.084 2s.033 1.332.085 2H4.263C4.097 13.36 4 12.692 4 12s.098-1.36.263-2zm.82 6h3.215c.188 1.424.42 2.65.565 3.357-1.593-.682-2.916-1.87-3.78-3.357zm5.904 3.928c-.068-.353-.388-2.038-.645-3.928h3.32c-.26 1.89-.578 3.576-.646 3.928-.333.043-.67.072-1.014.072s-.68-.03-1.014-.072zm4.152-.57c.145-.708.377-1.934.565-3.358h3.215c-.864 1.487-2.187 2.675-3.78 3.357zm4.6-5.358h-3.822c.05-.668.084-1.344.084-2s-.033-1.332-.085-2h3.82c.167.64.265 1.308.265 2s-.097 1.36-.263 2z"></path></g></svg>,
               title: 'Register your domain',
               text: 'Get your domain name before someone else does.'},
              {icon: <svg className="w-full h-full" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z"></path></g></svg>,
               title: 'Get online',
               text: 'Bring it all to life with a beautiful website that grows with your idea.'}].map(item =>
                <div className="">
                  <div className="ml-2 h-10 w-10">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-2xl mt-6 mb-4">{item.title}</h3>
                  <p>{item.text}</p>
                </div>)}
          </div>
        </div>
      </section>
    </>
  )
}

export default NameGenerator;

