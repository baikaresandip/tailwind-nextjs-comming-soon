import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Home - India's Premier EV Charging Station Directory ",
  description: 'eChargingStations.com is a portal dedicated to providing information on electric vehicle charging stations across India. This platform aims to make it easier for electric vehicle owners to find charging stations near their location, enabling them to travel more conveniently and with peace of mind. Users can search for charging stations based on their location and filter results based on various criteria such as charging speed, availability, and more. In addition to providing information on charging stations, eChargingStations.com also offers resources and articles on electric vehicles and the latest trends in the industry.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
