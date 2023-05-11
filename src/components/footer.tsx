export default function Footer() {
  return (
    <footer className="bg-gray-100 border-y border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl my-14 mb-20 px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between mb-12">
          <div>
            <h4 className="font-medium mb-4 text-sm">Legal</h4>
            <a
              className="text-gray-500 text-sm block mb-2 hover:text-gray-800 transition-colors duration-200"
              target="_blank"
              href="https://vercel.com/legal/privacy-policy"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center"></div>
      </div>
    </footer>
  )
}
