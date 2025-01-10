const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: any) {
  app.use(
    "/api", // the path where you want to apply the proxy
    createProxyMiddleware({
      target: "https://example.com", // the target server for the proxy
      changeOrigin: true, // changes the origin of the host header to the target URL
      pathRewrite: { "^/api": "" }, // rewrites the api path
    })
  );
};
