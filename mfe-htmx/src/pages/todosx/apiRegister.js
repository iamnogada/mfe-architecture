import { APIRoute } from 'astro';

export const POST = async ({ request, redirect }) => {
  const body = await request.json();

  if (!body.todo || body.categoryid === "-1") {
    return new Response(
      JSON.stringify({ error: 'Todo or Category is missing' }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
  try {
    const raw = JSON.stringify(body);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    await fetch(`http://localhost:3000/todos`, requestOptions);
    return redirect('./register');
  }catch (error) {
    console.log(JSON.stringify(error.message));
    return new Response(
      JSON.stringify(error.message),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
  
};
