const TARGET = 'https://huntinveri.de/'

Deno.serve(() => {
    new Response(null, {
        status: 302,
        headers: {
            Location: TARGET
        }
    })
});