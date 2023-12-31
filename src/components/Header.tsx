// import siteMetadata from '@/data/siteMetadata'
// import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from './Link'
import Image from 'next/image'
// import MobileNav from './MobileNav'
// import ThemeSwitch from './ThemeSwitch'
// import SearchButton from './SearchButton'

const siteMetadata = {
  "headerTitle": "Coding Insights",
}

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between py-30 mb-1 bg-gray-50">
      <div className="mb-8 mt-6">
        <Link href="/" aria-label="Nice job">
          <div className="">
            <div className="">
              <Image className="m-auto" src="/coffee.png" alt="me" width="128" height="128" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block text-amber-600">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex font-bold items-right space-x-8 leading-5 sm:space-x-6 mb-8 tablet:text-xl ">
            <Link
              key="Home"
              href="/"
              className="font-medium text-amber-500 sm:block back"
            >
              Home
            </Link>
            <Link
              key="Blog"
              href="/blog"
              className="font-medium text-amber-500 sm:block back"
            >
              Blogs
            </Link>
            <Link
              key="Login"
              href="/login"
              className="font-medium text-amber-500 sm:block back"
            >
              Login
            </Link>
            <Link
              key="About"
              href="/about"
              className="font-medium text-amber-500 sm:block back"
            >
              About
            </Link>
        {/* <SearchButton />
        <ThemeSwitch />
        <MobileNav /> */}
      </div>
    </header>
  )
}

export default Header