import {APIRoute} from "astro";

export const POST = async ({params,request,redirect}) => {
    const body = await request.json();
    console.log("Body:"+JSON.stringify(body));
    console.log("URL:"+request.url);
    console.log(`referrer:${request.refferer}`);
    console.log(`referrer:${request.headers.get('referer')}`);
    return redirect("./register");
};