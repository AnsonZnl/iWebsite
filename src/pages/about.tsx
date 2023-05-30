import Header from './../components/header'
import Footer from './../components/footer'

export default function About() {
  const qaList = [
    {
      q: 'iWebsite是什么？',
      a: '他是一个基于Next.js、Vercel搭建的网站模版，你可以使用它快速、免费的搭建属于自己的网站，利用Next.js不仅对SEO友好，可以基于Vercel的CI/CD自动化部署。',
    },
    {
      q: '那些人适合用iWebsite？',
      a: '有一定的Web开发基础，了解HTML、CSS、JavaScript语言特性，对React、Next.js、GitHub、Vercel有一定使用基础。',
    },
    {
      q: '为什么iWebsite免费？',
      a: '因为所有的服务都是可以免费使用的（包括GitHub、Vercel等等），我只是教会你如何简单的使用它（前提是你有一定的Web开发基础）。',
    },
    {
      q: 'iWebsite适合做什么',
      a: '可以做很多事情，比如用作企业官网、个人博客、毕业设计、或者仅仅出于兴趣爱好。',
    },
  ]
  return (
    <main className="dark:bg-slate-800">
      <Header />
      <div className="max-w-7xl mx-auto p-4 h-[36rem]">
        {qaList.map((e) => {
          return (
            <div key={e.a} className="mb-4">
              <h2 className="text-xl mb-2 dark:text-gray-300">{e.q}</h2>
              <p className="text-sm text-gray-600">{e.a}</p>
            </div>
          )
        })}
      </div>
      <Footer />
    </main>
  )
}
