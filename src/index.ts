const TARGET = 'https://authveriy.net/'

Deno.serve((req) => {
    const url = new URL(req.url);
    return Response.redirect(TARGET + url.pathname + url.search, 302);
});