

export const PUT = async ({request,redirect}) => {
    const body = await request.json();
    try{
      let response = await fetch(`http://localhost:3000/todos/${body.id}`);
      let data = await response.json();
      let todo = { ...data, ...body };
      const raw = JSON.stringify(todo);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      response = await fetch(`http://localhost:3000/todos/${body.id}`, requestOptions);
    }catch(error){
    }
    
    const params = new URL(request.headers.get('Referer')).searchParams;
    return redirect(`list?${params.toString()}`);
};