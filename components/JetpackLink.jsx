import { useState } from "react";

function JetpackLink({app, bgColor, color}) {
  const [hover,setHover] = useState(false);
  const svg = app === 'Google Play' ? 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 25" aria-hidden="true">
      <defs>
        <linearGradient id="lp-gp-a" x1="50%" x2="40%" y1="25%" y2="50%">
          <stop offset="0%"  stopColor="#00c4ff"></stop>
          <stop offset="100%"  stopColor="#00e3ff"></stop>
        </linearGradient>
        <linearGradient id="lp-gp-b" x1="0%" x2="100%" y1="50%" y2="50%">
          <stop offset="0%"  stopColor="#fb0"></stop>
          <stop offset="100%"  stopColor="#fd0"></stop>
        </linearGradient>
        <linearGradient id="lp-gp-c" x1="100%" x2="0%" y1="20%" y2="80%">
          <stop offset="0%"  stopColor="#df2454"></stop>
          <stop offset="100%"  stopColor="#ff3a44"></stop>
        </linearGradient>
        <linearGradient id="lp-gp-d" x1="0%" x2="100%" y1="20%" y2="80%">
          <stop offset="0%"  stopColor="#13d375"></stop>
          <stop offset="100%"  stopColor="#00f076"></stop>
        </linearGradient>
      </defs>
      <path fill="url(#lp-gp-b)" d="m16.57 16.65-4.02-4.02v-.28l4.02-4.01.08.05 4.75 2.7c1.36.77 1.36 2.03 0 2.8l-4.74 2.7-.1.06z"></path><path fill="url(#lp-gp-a)" d="M.44.38C.16.68 0 1.15 0 1.75v21.48c0 .6.16 1.07.45 1.36l.08.07 12.03-12.04v-.26L.52.32.44.38z"></path>
      <path fill="url(#lp-gp-c)" d="m16.66 16.6-4.1-4.1L.43 24.6c.45.48 1.19.53 2.02.07l14.2-8.08"></path>
      <path fill="url(#lp-gp-d)" d="M16.66 8.4 2.46.32C1.63-.15.88-.08.44.4l12.11 12.1 4.1-4.1z"></path>
    </svg> :
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 23" aria-hidden="true" className="-mt-1">
      <path fill={color} d="m12.88 5.97.28.02c1.6.05 3.08.85 4 2.16a4.95 4.95 0 0 0-2.36 4.15 4.78 4.78 0 0 0 2.92 4.4 10.96 10.96 0 0 1-1.52 3.1c-.9 1.33-1.83 2.64-3.32 2.66-1.45.04-1.94-.85-3.6-.85-1.67 0-2.19.83-3.57.89-1.42.05-2.5-1.43-3.43-2.76-1.85-2.7-3.3-7.63-1.36-10.97a5.32 5.32 0 0 1 4.47-2.73C6.81 6 8.13 7 9 7c.86 0 2.48-1.18 4.16-1zm.3-5.25a4.87 4.87 0 0 1-1.11 3.49 4.1 4.1 0 0 1-3.24 1.53 4.64 4.64 0 0 1 1.14-3.36A4.96 4.96 0 0 1 13.18.72z"></path>
    </svg>

  return (
    <a href={app === 'Google Play' ? 'https://play.google.com/store/apps/details?id=com.jetpack.android' 
                                   : 'https://apps.apple.com/app/apple-store/id1565481562'} target='_blank' 
      className={`h-12 w-40 rounded-md bg-${bgColor} text-${color} flex items-center justify-center gap-4 border border-white`}
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}>
      <div className="h-5 w-5">
        {svg}
      </div>
      <div>
        <p className="text-xs font-semibold -mb-1">{app === 'Google Play' ? 'Get it on' : 'Download on the'}</p>
        <p className={`text-lg font-bold -mt-1 ${hover ? 'underline' : ''}`}>{app}</p>

      </div>
    </a>
				
  )
}

export default JetpackLink;

