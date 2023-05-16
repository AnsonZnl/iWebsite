import Header from './../components/header'
import Footer from './../components/footer'

export default function About() {
  return (
    <main className="">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-2 h-96">
        <h2 className="">iWebsite是什么？</h2>
        <p>
          他是一个基于Next.js、Vercel搭建的网站模版，你可以使用它快速、免费的搭建属于自己的网站，利用Next.js不仅对SEO友好，可以基于Vercel的CI/CD自动化部署。
        </p>
      </div>
      <Footer />
    </main>
  )
}
