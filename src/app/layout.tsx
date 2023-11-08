import Header from '../components/Header'
import ArticleContainer  from '../components/ArticleContainer'
import Article from '../components/Article'
import '../styles/global.css'

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
                <ArticleContainer>
                  <Article/>
                  <Article/>
                  <Article/>
                </ArticleContainer>
          </div>
        </body>
      </html>
    )
  }