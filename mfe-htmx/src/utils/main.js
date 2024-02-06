export const GetQueryString = () =>{
    const url = new URL(Astro.request.url);
    const path = url.pathname; // 경로
    const searchParams = new URLSearchParams(url.search);
    return searchParams;
}