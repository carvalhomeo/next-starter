import Home from './page'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('render Home', () => {
    render(<Home />)
    const smth = screen.getByText('hi')
    expect(smth).toBeInTheDocument()
  })
})
