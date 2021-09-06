const { createProxyMiddleware } = require('http-proxy-middleware');
const redis = require('redis');
const apicache = require('apicache');

const middleware = createProxyMiddleware({
  target: 'https://api.github.com/',
  changeOrigin: true,
});

const cacheWithRedis = apicache.options({ debug: true, redisClient: redis.createClient() }).middleware;

module.exports = function (app) {
  app.use('/orgs', cacheWithRedis(), middleware);

  app.use('/users', cacheWithRedis(), middleware);
};
