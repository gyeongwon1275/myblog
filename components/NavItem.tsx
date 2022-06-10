import { NavMenu } from '@/lib/api'
import Link from 'next/link'
import React from 'react'

export default function NavItem({ title, href }: NavMenu): JSX.Element {
  return (
    <Link href={href}>
      <a>{title}</a>
    </Link>
  )
}
