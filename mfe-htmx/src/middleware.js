export function onRequest({ request,redirect }, next) {
//   console.log('Request:' + request.url);
//   const url = request.url;

//   if ('/main' !== url.slice(-5)) return redirect(`${url}/main`);
//   if ('/' === url.slice(-1)) return redirect(`${url}main`);
  return next();
}
