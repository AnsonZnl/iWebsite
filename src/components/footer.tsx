export default function Footer() {
  return (
    <footer className="bg-gray-100 border-y border-gray-200 dark:bg-slate-800 dark:border-gray-600">
      <div className="mx-auto w-full max-w-screen-xl my-6 px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between ">
          <div className="">
            <h4 className="font-medium mb-4 text-sm dark:text-gray-50">
              Copyright © {new Date().getFullYear()} Anson. All rights reserved.
            </h4>
            <a
              className="text-gray-500 text-sm block mb-2 hover:text-gray-600 transition-colors duration-200"
              target="_blank"
              href="https://github.com/AnsonZnl/iWebsite"
            >
              Github
            </a>
            <a
              className="text-gray-500 text-sm block mb-2 hover:text-gray-600 transition-colors duration-200"
              target="_blank"
              href="https://www.zhangningle.top"
            >
              Blog
            </a>
          </div>
          {/* <div>夜间模式</div> */}
        </div>
      </div>
    </footer>
  )
}
