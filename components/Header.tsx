import { NAV_MENU } from '@/lib/constants'
import Logo from './icons/Logo'
import NavDrawer from './NavDrawer'
import Search from './Search'

type HeaderProps = { menu?: string[] }

export default function Header({ menu }: HeaderProps): JSX.Element {
  return (
    <header className='sticky flex justify-between items-center px-8 py-4'>
      <Logo />
      <NavDrawer menus={NAV_MENU} />
      <Search />
    </header>
  )
}
