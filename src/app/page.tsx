import Image from 'next/image'
import { Inter } from 'next/font/google'
import { NextSeo } from 'next-seo';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <main className="flex min-h-screen bg-slate-950 flex-col items-center justify-between p-5 lg:p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between text-sm ">

          <div className=" bottom-0 left-0 flex h-30 md:h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
              href="/"
              rel="noopener noreferrer"
            >
              <div className='flex flex-col text-center'>
                <h1 className='text-2xl lgtext-4xl text-sky-400/100 font-semibold	'> E-Charging Stations </h1>
                <p className='text-2 font-medium m-2  text-slate-100'>India&apos;s Premier EV Charging Station Directory</p>
              </div>
            </a>
          </div>
        </div>

        <div className="relative flex flex-col  place-items-center ">
          {/* before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] */}
          <h2 className='text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-bold '>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Comming Soon</span>
            <span className=''>⌛</span>
          </h2>
          <p className='text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-100 font-thin'>
            We&apos;re currently working 👨‍💻 hard to bring you something great, and we can&apos;t wait to share it with you 📅.
            Our team is putting the finishing touches on a new project 🚀 that we think you&apos;ll love 😍.
          </p>
        </div>
        <div className='text-centerf lg:m-20 mt-10 w-80 p-3' >
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-slate-100  font-light text-sm leading-6">Stay tuned for our live updates!</label>
              <div className="mt-2 flex-col flex lg:flex md:flex-row">
                <input id="email" name="email" type="email" placeholder='Email address' autoComplete="email" required className="block w-full placeholder:text-gray-500 pl-[10px] focus:outline-none border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-0 rounded-none p-2" />
                <button className='ml-0 bg-slate-950 sm:w-auto border-slate-100	rounded-none mt-2 md:mt-0	p-2 border-2 text-white'>Subscribe</button>
              </div>
            </div>
          </form>
        </div>
        <footer className='text-slate-500 text-center'>
          <div className='my-4 text-center' >
            <ul className='flex flex-wrap lg:flex items-center '>
              <li className='px-1'> Follow Us 📣 </li>
              <li className='px-1'> <a href='#'> 
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="40px" height="40px"><circle style={{"fill": "#039BE5"}} cx="24" cy="24" r="19"/><g><path style={{"fill": "#FFFFFF"}} d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></g></svg>
              </a>  </li>
              <li className='px-1'> <a href='#'> 
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="40px" height="40px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/></svg>
              </a> </li>
              <li className='px-1'> 
                <a href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="40px" height="40px"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><g><rect x="12" y="19" fill="#FFFFFF" width="5" height="17"/><path fill="#FFFFFF" d="M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z"/><path fill="#FFFFFF" d="M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"/></g></svg>
                </a> 
                </li>              
            </ul>
          </div>
          <div className=''>
            <p className=''>
              Copyright &copy; {currentYear} | Design and Developed By &nbsp;
              <a target='_blank' className='no-underline md:underline' href='https://github.com/baikaresandip'>
                Baikare Sandip
              </a>
            </p>
          </div>
        </footer>

      </main>
    </> 
  )
}
