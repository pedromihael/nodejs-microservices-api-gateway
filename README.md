# Node.js Microservices Api Gateway

This is a middleware to a nodejs microservices project built to compose a partial grade of distributed systems, a discipline of my software engineering grad.

The point here is to use the `express-http-proxy` lib to deal with redirections based on the `req.path`, assuming that every endpoint starts with it's microservice name.

### You'll need docker and docker-compose to run this api gateway.

Run `docker-compose up` and redirect your frontend requests to `https://localhost:3333.

C ya 👋.