import Header from './../components/header'
import Footer from './../components/footer'

export default function About() {
  return (
    <main className="">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <h1 className="next-error-h1">404</h1>
          <div>
            <h2>This page could not be found</h2>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
