import NavItem from './NavItem'

type NavDrawerProps = {
  menus: { name: string; href: string }[]
}

export default function NavDrawer({ menus }: NavDrawerProps): JSX.Element {
  return (
    <nav data-testid='NavDrawer' aria-label='main navigation'>
      {menus.map(({ name, href }) => (
        <NavItem key={name} name={name} href={href} />
      ))}
    </nav>
  )
}
