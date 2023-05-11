import Image from 'next/image'
import IwsLink from './IwsLink'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { router as routerList } from './../router'

export default function Header() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const currentRouter = routerList.find((e) => e.path === router.asPath)?.name
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* 左侧 logo */}
          <div className="flex-shrink-0 flex items-center">
            <IwsLink href="/">
              <Image
                className="block h-8 w-auto cursor-pointer"
                height={43.2}
                width={80}
                src="/logo.png"
                alt="Logo"
              />
            </IwsLink>
          </div>
          {/* 右侧导航 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 h-16">
              <IwsLink
                href="/"
                className={`text-gray-600 hover:bg-gray-200 ${
                  currentRouter === 'home' ? 'bg-gray-200' : ''
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                首页
              </IwsLink>
              <IwsLink
                href="/about"
                className={`text-gray-600 hover:bg-gray-200 ${
                  currentRouter === 'about' ? 'bg-gray-200' : ''
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                关于我们
              </IwsLink>
            </div>
          </div>
          {/* 移动端折叠导航 */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out"
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Heroicon name: menu */}
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* 移动端折叠菜单 */}
      <div className={`md:hidden ${isOpen ? '' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <IwsLink
            href="/"
            className={`block text-gray-600 hover:bg-gray-200 ${
              currentRouter === 'home' ? 'bg-gray-200' : ''
            } px-3 py-2 rounded-md text-base font-medium`}
          >
            首页
          </IwsLink>
          <IwsLink
            href="/about"
            className={`block text-gray-600 hover:bg-gray-200 ${
              currentRouter === 'about' ? 'bg-gray-200' : ''
            } px-3 py-2 rounded-md text-base font-medium`}
          >
            关于我们
          </IwsLink>
        </div>
      </div>
    </nav>
  )
}
