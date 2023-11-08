// import siteMetadata from '@/data/siteMetadata'
// import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from './Link'
// import MobileNav from './MobileNav'
// import ThemeSwitch from './ThemeSwitch'
// import SearchButton from './SearchButton'

const siteMetadata = {
  "headerTitle": "Welcome to the blog",
}

const Header = () => {
  return (
    <header className="flex items-center justify-between py-30 bg-gray-50 px-3">
      <div>
        <Link href="/" aria-label="Nice job">
          <div className="flex items-center py-10">
            <div className="mr-3">
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
      <div className="flex font-bold items-right space-x-4 leading-5 sm:space-x-6">
            <Link
              key="Home"
              href="/"
              className="hidden font-medium text-amber-500 sm:block back"
            >
              Home
            </Link>
            <Link
              key="Blog"
              href="/blog"
              className="hidden font-medium text-amber-500 sm:block back"
            >
              Blogs
            </Link>
            <Link
              key="Login"
              href="/login"
              className="hidden font-medium text-amber-500 sm:block back"
            >
              Login
            </Link>
            <Link
              key="About"
              href="/about"
              className="hidden font-medium text-amber-500 sm:block back"
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