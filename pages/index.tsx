import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { getNavMenus, NavMenu } from '@/lib/api'
import { Layout } from '@/components/index'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  navMenus,
}) => {
  return (
    <Layout navMenus={navMenus}>
      <main>main</main>
    </Layout>
  )
}

type InsertPageProps = {
  navMenus: NavMenu[]
}

export const getStaticProps: GetStaticProps<InsertPageProps> = async () => {
  return {
    props: {
      navMenus: await getNavMenus(),
    },
  }
}

export default Home
