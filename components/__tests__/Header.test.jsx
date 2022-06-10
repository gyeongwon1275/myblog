import { render, screen } from '@testing-library/react'

import Header from '../Header'

import { navMenus } from '@/lib/mocks/index'

describe('Header', () => {
  it('로고, 메뉴, 검색바를 출력합니다.', () => {
    render(<Header navMenus={navMenus} />)

    expect(screen.getByTestId('Logo')).toBeInTheDocument()
    expect(screen.getByTestId('NavDrawer')).toBeInTheDocument()
    expect(screen.getByTestId('Search')).toBeInTheDocument()
  })
})
