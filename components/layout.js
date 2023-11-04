import { Inter } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="/"><header></header></a>
        <div>
          <a href="/"><nav></nav></a>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}