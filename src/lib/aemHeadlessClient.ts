import AEMHeadless from "@adobe/aem-headless-client-js";

const serviceURL =
  process.env.NEXT_PUBLIC_USE_PROXY === "true"
    ? "/"
    : process.env.NEXT_PUBLIC_HOST_URI;

// const setAuthorization = () => {
//   if (process.env.NEXT_PUBLIC_AUTH_METHOD === "basic") {
//     return [
//       process.env.NEXT_PUBLIC_BASIC_AUTH_USER,
//       process.env.NEXT_PUBLIC_BASIC_AUTH_PASS,
//     ];
//   } else if (process.env.NEXT_PUBLIC_AUTH_METHOD === "dev-token") {
//     return process.env.NEXT_PUBLIC_DEV_TOKEN;
//   } else {
//     return;
//   }
// };

const aemHeadlessClient = new AEMHeadless({
  serviceURL: serviceURL,
  endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  // auth: setAuthorization(),
});

export default aemHeadlessClient;
