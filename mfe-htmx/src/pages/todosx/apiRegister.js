import { APIRoute } from 'astro';

export const POST = async ({ params, request, redirect }) => {
  const body = await request.json();
  console.log('Body:' + JSON.stringify(body));
  console.log('URL:' + request.url);
  console.log(`referrer:${request.refferer}`);
  console.log(`referrer:${request.headers.get('referer')}`);
  if (!body.todo || body.categoryId === -1) {
    const error = { error: 'Todo or Category is missing' };
    return new Response(
      JSON.stringify(error),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
  return redirect('./register');
};
