import { NavMenu } from '@/lib/api'
import NavItem from './NavItem'

type NavDrawerProps = {
  navMenus: NavMenu[]
}

export default function NavDrawer({ navMenus }: NavDrawerProps): JSX.Element {
  return (
    <nav data-testid='NavDrawer' aria-label='main navigation'>
      {navMenus.map(({ title, href }) => (
        <NavItem key={title} title={title} href={href} />
      ))}
    </nav>
  )
}
