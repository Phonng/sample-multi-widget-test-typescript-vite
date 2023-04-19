import PageContainer from './page-container'
import { render, screen } from '@testing-library/react'

test('render the component', async () => {
  render(<PageContainer />)
  const container = await screen.findByTestId('page-container')
  expect(container).toBeInTheDocument()
})
