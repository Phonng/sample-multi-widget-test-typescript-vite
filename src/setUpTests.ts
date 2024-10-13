import '@testing-library/jest-dom/extend-expect'

import server from './mocks/server'

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }
})

beforeAll(() => server.listen())
afterEach(async () => {
  localStorage.clear()
  server.resetHandlers()
})
afterAll(() => server.close())
