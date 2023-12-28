const fastify = require('fastify')({ logger: true })

fastify.register(require("@fastify/swagger"));

fastify.register(require("@fastify/swagger-ui"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "fastify-api",
      description: "Testing the Fastify swagger API",
    },
    externalDocs: {
      url: "https//swagger.io",
      description: "More info",
    },
  },
});
fastify.register(require('./routes/items'))

const PORT = 5000



const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

fastify.ready()

start()