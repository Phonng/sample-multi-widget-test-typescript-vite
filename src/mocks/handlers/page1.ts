import { rest } from 'msw'

export const handleFake = rest.get(
  `http://localhost:5173/api/get-mock-data`,
  async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 0,
        message: 'success',
        body: [{ name: 1, age: 2 }],
      }),
    )
  },
)
