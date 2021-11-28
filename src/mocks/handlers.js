import { rest } from 'msw';

export const handlers = [
  rest.post(
    'https://api.le-systeme-solaire.net/rest/bodies',
    (req, res, ctx) => {
      ctx.status(200);
    }
  ),
];
