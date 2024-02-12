import { APIRoute } from 'astro';

export const POST = async ({ request, redirect }) => {
  const body = await request.json();

  if (!body.todo || body.categoryId === "-1") {
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
    let reponse = await fetch(`http://localhost:3000/todos?_page=1&_per_page=1`);
    let data = await reponse.json();
    console.log(`data: ${JSON.stringify(data)}`);
    let id = data.items + 1;
    let todo = { id, ...body, completed: false };
    const raw = JSON.stringify(todo);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    reponse = await fetch(`http://localhost:3000/todos`, requestOptions);
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
