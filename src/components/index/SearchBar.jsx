import Typewriter from '../Typewriter.jsx'

function SearchBar({classes}) {
  const strings = [
    'artificial-eloquence.com',
    'pool-request.com',
    'splash-cache.com',
    'upload-down-code.com',
    'browser-powder.com',
    'front-end-hydration-station.com',
    'full-stack-lipstick.com',
  ]

  return (
    <div className={`relative bg-[#f1f8fe] w-full rounded-xl shadow-lg sm:p-5 flex gap-10 ${classes}`}>
      <div className="flex justify-around items-center h-full w-32 ml-6 max-sm:hidden">
        {[0,1,2].map(() =>
          <div className="bg-[#d4dadf] h-4 w-4 sm:h-5 sm:w-5 rounded-full"></div>
        )}
      </div>
      <div className="bg-white w-full h-full rounded-xl flex justify-start items-center px-6 max-sm:text-lg">
        <img width='24' height='24' src="https://cdn-icons-png.flaticon.com/512/1828/1828471.png" alt='' className="h-6 mr-4" />
        <Typewriter strings={strings}/>
      </div>
    </div>
  )
}

export default SearchBar;
