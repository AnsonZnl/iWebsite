'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const toggleDark = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return (
    <div
      className="flex hover:bg-gray-200 hover:rounded-full hover:dark:bg-gray-500"
      onClick={() => toggleDark()}
    >
      <button
        type="button"
        aria-label="Use Dark Mode"
        className="active:scale-95 transition-transform flex w-10 h-10 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link"
      >
        <Image
          src={theme == 'light' ? '/dark.svg' : '/ligth.svg'}
          width="36"
          height="36"
          alt="dark image"
        />
      </button>
    </div>
  )
}
