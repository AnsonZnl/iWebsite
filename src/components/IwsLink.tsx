import Link from 'next/link'

export interface Props {
  href: string
  className?: string
  children?: any
}

function IwsLink(props: Props) {
  const { href, className, children } = props
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  )
}

export default IwsLink
