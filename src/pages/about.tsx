import Header from './../components/header'
import Footer from './../components/footer'

export default function About() {
  return (
    <main className="">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <h1>关于我们</h1>
        </div>
      </div>
      <Footer />
    </main>
  )
}
