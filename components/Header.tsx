import Logo from './icons/Logo'
import NavDrawer from './NavDrawer'
import Search from './Search'

import { NavMenu } from '@/lib/api'

type HeaderProps = { navMenus: NavMenu[] }

export default function Header({ navMenus }: HeaderProps): JSX.Element {
  return (
    <header className='sticky flex justify-between items-center px-8 py-4'>
      <Logo />
      <NavDrawer navMenus={navMenus} />
      <Search />
    </header>
  )
}
