import Header from './../components/header'
import Footer from './../components/footer'
import Image from 'next/image'

export default function Index() {
  const list = [
    {
      title: '免费',
      descript: '使用 iWebsite 构建网站是完全免费的，前提是您了解 Web 开发流程。',
    },
    {
      title: 'SEO',
      descript:
        '得利于 Next.js 的 SSR 渲染，使得对 SEO 非常友好，您的网站可以很快的被搜索引擎收集。',
    },
    {
      title: '简单',
      descript: '您只需要使用 iWebsite 的模版，然后按照我们的步骤即可拥有一个属于自己的网站。',
    },
    {
      title: '可扩展',
      descript: 'iWebsite 仅提供基础的功能，如果您有其他的需求可以自己进行开发，或者联系我。',
    },
  ]
  return (
    <main className="dark:bg-slate-800">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-2 h-96 ">
        <div className="relative h-full">
          <Image src="/banner.jpeg" alt="Banner" layout="fill" objectFit="cover" quality={100} />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">欢迎来到 iWebsite</h1>
              <p className="text-lg lg:text-xl text-white">
                在这里，你可以使用它免费搭建属于你自己的网站，快来试试吧👉
                <a
                  href="https://github.com/AnsonZnl/iWebsite"
                  className="text-gray bg-blue-500 hover:bg-blue-600 mx-2 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Get Start
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 from-gray-300 to-gray-700">
        <div className="py-2 text-center mb-4">
          <h2 className="text-center text-xl mb-2 dark:text-gray-300">iWebsite 的优点</h2>
          <p className="text-xs text-gray-400">当然不止这些</p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-between mb-4 w-full">
          {list.map((item) => {
            return (
              <div
                className="h-1/2 md:h-1/4 mx-2 p-2 mb-8 md:mb-1 rounded-md shadow cursor-pointer hover:shadow-md"
                key={item.title}
              >
                <h3 className="text-center text-lg dark:text-gray-300">{item.title}</h3>
                <p className="block p-4 text-sm text-gray-500 tracking-wider leading-6">
                  {item.descript}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      {/* <div>
        <Image src="/设计图.png" width={1600} height={700} alt="设计图" />{' '}
      </div> */}

      <Footer />
    </main>
  )
}
