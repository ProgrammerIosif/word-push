import Typewriter from '../Typewriter'

function SearchBar() {
  const strings = [
    'admin@codeispoetry.art',
    'info@opensourceforall.org',
    'hello@artfulbaker.blog',
    'support@mymercantile.store',
    'contact@shoeboxgraphics.com'
  ]

  return (
    <div className='relative bg-white border w-full rounded shadow-lg p-5 flex gap-4'>
        <img width='24' height='24' src="https://cdn-icons-png.flaticon.com/512/9351/9351538.png" alt='' className="h-6"/>
        <Typewriter strings={strings}/>
    </div>
  )
}

export default SearchBar;
