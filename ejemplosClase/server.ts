import { serve } from "https://deno.land/std@0.106.0/http/mod.ts";

const port = Number(Deno.env.get("PORT")) || 8080;

async function startListening() {
  const server = serve({ port });
  for await (const req of server) {
    req.respond({ body: JSON.stringify({ msg: "hola mundo desde deno!" }) });
  }
}

startListening();
console.log(`conectado al puerto ${port}!`);

await new Promise((r) => setTimeout(r, 2000));

// const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const response = await fetch(`http://localhost:${port}`);
const json = await response.json();
console.log(json);
