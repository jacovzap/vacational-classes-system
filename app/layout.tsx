import './globals.css'
import { Open_Sans } from 'next/font/google'
import Sidebar from '@/components/sidebar/Sidebar'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'PequeñosGenios',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <div className='h-screen flex'>
          <div className='min-w-60'>
          <Sidebar />
          </div>
      
          {children}
        </div>
      </body>
    </html>
  )
}
