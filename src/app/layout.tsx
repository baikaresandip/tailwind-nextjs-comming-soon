import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import { ThemeSwitcher } from '../../components/ThemeSwitcher'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={ `${inter.className} bg-slate-50 dark:bg-[#0d1117] `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>          
      </body>
    </html>
  )
}
