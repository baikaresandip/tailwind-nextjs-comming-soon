import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "next-themes"
import { NextSeo } from 'next-seo';
import data from '../../data/data';
import Newsletter from '../../components/Newsletter';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const currentYear = new Date().getFullYear()
  const {
    sitename,
    sitetagline,
    description,
    copyrightText,
    newsletterheading,
    sitelogo,
    socialIcons,
    socialIconsHeading,
    title,
  } = data

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-12">
        <div className="z-10 w-full max-w-5xl items-center justify-between text-sm ">

          <div className=" bottom-0 left-0 flex h-30 md:h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
              href="/"
              rel="noopener noreferrer"
            >
              <div className='flex flex-col text-center'>
                <h1 className='text-2xl lgtext-4xl text-sky-400/100 font-semibold	'> {sitename} </h1>
                <p className='text-2 font-medium m-2 text-slate-800 dark:text-slate-100'>{sitetagline}</p>
              </div>
            </a>
          </div>
        </div>

        <div className="relative flex flex-col  place-items-center ">
          <h2 className='text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-bold '>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>{title}</span>
            <span className=''>⏳</span>
          </h2>
          <p className='text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin' dangerouslySetInnerHTML={{
            __html: description
          }}>
          </p>
        </div>
        
      <Newsletter  newsletterheading={newsletterheading} />

        <footer className='text-slate-500 text-center'>
          <div className='my-4 text-center' >
            <ul className='flex flex-wrap lg:flex justify-center '>
              <li className='px-2'> {socialIconsHeading} </li>
              {socialIcons.map((social, index) =>
              (
                <li key={index} className='px-2 capitalize border-1  hover:border-b-white'>
                  <a target='_blank' className='' href={social.link}> {social.icon}  </a>
                </li>
              )
              )}
            </ul>
          </div>
          <div className=''>
            <p className='' dangerouslySetInnerHTML={{
              __html: copyrightText
            }}>
            </p>

          </div>
        </footer>

      </main>
    </>
  )
}
