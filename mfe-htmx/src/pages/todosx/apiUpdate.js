

export const PUT = async ({request,redirect}) => {
    const body = await request.json();
    try{

      const raw = JSON.stringify(body);
      console.log(`body: ${JSON.stringify(body)}`);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      const response = await fetch(`http://localhost:3000/todos?id=eq.${body.id}`, requestOptions);
    }catch(error){
    }
    
    const params = new URL(request.headers.get('Referer')).searchParams;
    return redirect(`list?${params.toString()}`);
};