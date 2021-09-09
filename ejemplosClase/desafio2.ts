/** ES Modules */
import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

const PORT = 8080;

/** Create Server */
const server = serve({
  port: PORT,
});

console.log(`http://localhost:${PORT}`);
for await (const req of server) {
  //   console.log(req.url); // lo que viene dsp del host
  const query = req.url.replace(/\//g, ""); // quita todas las barras ('/')
  //   console.log(query);
  const params = new URLSearchParams(query);
  const frase = params.get("frase");

  let result = "";
  if (frase) {
    const fraseDeco = decodeURIComponent(frase);
    result = fraseDeco.split(" ").reverse().join(" ");
  }

  req.respond({
    status: 200,
    headers: new Headers({ "content-type": "text/html; charset=utf-8" }),
    body: result,
  });
}
