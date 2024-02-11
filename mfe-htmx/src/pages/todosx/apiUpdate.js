import {APIRoute} from "astro";
import { log } from "console";

export const POST = async ({params,request,redirect}) => {
    const body = await request.formData();
    console.log(JSON.stringify(request));
    console.log(request.url);
    return redirect("./list");
};