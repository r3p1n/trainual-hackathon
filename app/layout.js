import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trainual hackathon',
  description: 'New functional matrix of competences',
}

export default function RootLayout({ children }) {
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
