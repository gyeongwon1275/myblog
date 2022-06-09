type NavItemProps = {
  name: string
  href: string
}

import Link from 'next/link'
import React from 'react'

export default function NavItem({ name, href }: NavItemProps): JSX.Element {
  return (
    <Link href={href}>
      <a>{name}</a>
    </Link>
  )
}
