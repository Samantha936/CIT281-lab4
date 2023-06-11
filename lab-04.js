// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax4
fastify.get("/", (request, reply) => {
console.log(request.body, request.params, request.query)
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send("<h1>Hello from Lab 4!</h1>");
});

fastify.get("/name", (request, reply) => {
  console.log(request.query)
    const {first, last} = request.query;
    const name = first && last ? first + " " + last : "Guest"

    let response =
      first !==undefined && last !== undefined
      ? `<h1> Hello, ${first} ${last}</h1>`
      : `<h1> Hello, Guest </h1>`;
    if(first !== undefined && last !== undefined) { 
        response = `<h1> Hello, "+ first + " " + last + " " + "</h1>"`;

    } else {
      response = `<h1> Hello, Guest </h1>`;
    }
      reply
        .code(200)
        .header("Content-Type", "text/html; charset=utf-8")
        .send(response);
});
    console.log(request.body, request.params, request.query)

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8083;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
