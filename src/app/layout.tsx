import Header from '../components/Header'
import ArticleContainer  from '../components/ArticleContainer'
import ArticleHead from '../components/ArticleHead'
import '../styles/global.css'
import Footer from '../components/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html className="bg-gray-900" lang="en">
        <body>
          <div className="h-screen mx-auto xl:max-w-5xl px-4 sm:px-6 xl:px-0 flex flex-col">
                <div className="justify-between font-sans flex-initial">
                  <Header/>
                </div>
                {children}
                <Footer/>
          </div>
          <script src="https://kit.fontawesome.com/a9a389920a.js" crossOrigin="anonymous"></script>
        </body>
      </html>
    )
  }