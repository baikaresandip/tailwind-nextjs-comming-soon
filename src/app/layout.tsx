import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'

import Head from 'next/head'
import ThemeSwitch from '../../components/ThemeSwitch'

const inter = Inter({ 
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: "Home - Comming soon Template",
  description: 'This is a simple coming soon template built with NextJS and TailwindCSS. It is a lightweight and responsive template that can be used for various projects that require a "coming soon" page.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="./_assets/style.css" />
      </Head>
      <body className={ `${inter.className} bg-gray-200	 dark:bg-[#0d1117] `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>          
          <ThemeSwitch />
          <main>{children}</main>
        </ThemeProvider>          
      </body>
    </html>
  )
}
