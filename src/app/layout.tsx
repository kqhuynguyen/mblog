import Header from '../components/Header'
import ArticleContainer  from '../components/ArticleContainer'
import ArticleHead from '../components/ArticleHead'
import '../styles/global.css'
import Footer from '../components/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from 'next/image'
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html className="bg-gray-900 h-screen w-screen" lang="en">
        <body>
          <div className="overflow-x-hidden m-0 h-screen w-screen tablet:mx-auto tablet:max-w-7xl tablet:px-0 flex flex-col bg-cover bg-fixed" style={{backgroundImage: `url('/header_image.jpg')`, backgroundPosition: "0 -50px"}}>
                <Header/>
                {/* <Image className="w-auto bg-fixed bg-cover" alt="Header image" src="/header_image.jpg" width="1200" height="1200"/> */}
                <div className="mb-80"></div>
                {children}
                <Footer/>
          </div>
        </body>
      </html>
    )
  }