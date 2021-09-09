import { serve } from "https://deno.land/std@0.100.0/http/server.ts";

const PORT = 8080;

const server = serve({
  port: PORT,
});

console.log("http://localhost:" + PORT);

for await (const req of server) {
  const query = req.url.replace(/\//g, ""); // esto elimina las barras de la url!
  const params = new URLSearchParams(query); // esto devuelve un diccionario de pares 'clave:valor'
  const frase = params.get("frase");

  if (frase) {
    const fraseDeco = decodeURIComponent(frase); // esto decodifica los caracteres especiales
    req.respond({
      status: 200,
      headers: new Headers({ "content-type": "text/html; charset=utf-8" }),
      body: fraseDeco.split(" ").reverse().join(" "),
    });
  }
}
