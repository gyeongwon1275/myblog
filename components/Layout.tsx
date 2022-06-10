import { Header } from '@/components/index'
import { NavMenu } from '@/lib/api'
import Footer from './Footer'

type LayoutProps = {
  navMenus: NavMenu[]
  children: React.ReactElement | React.ReactElement[]
}

export default function Layout({
  navMenus,
  children,
}: LayoutProps): JSX.Element {
  return (
    <>
      <Header navMenus={navMenus} />
      {children}
      <Footer />
    </>
  )
}
