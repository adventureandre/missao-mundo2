import './globals.css'
import { Inter } from 'next/font/google'

import Header from './header/page'
import Provider from '../components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To-Do List',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
        </Provider>

      </body>
    </html>
  )
}
