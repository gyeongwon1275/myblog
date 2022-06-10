import client from './sanity'

export const getBlogSlugs = async () => {
  return await client.fetch(
    `*[_type == "category"] | order(_createdAt asc){
      'params':{
            'slug':slug.current,
            title
      }
    }`
  )
}

export const getNavMenus = async (): Promise<NavMenu[]> => {
  return await client.fetch(
    `*[_type == "category"] | order(_createdAt asc){

    'href':'/'+slug.current,
    title
}`
  )
}

export const getBlogPost = async (param: string) => {
  return await client.fetch(
    `*[_type == "category"] | order(_createdAt asc).slug.current`
  )
}

export type NavMenu = {
  href: string
  title: string
}
