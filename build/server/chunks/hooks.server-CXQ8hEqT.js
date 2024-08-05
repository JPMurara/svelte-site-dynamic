import { e as env } from './env-C5O8tkwu.js';
import fs from 'fs';

const jsonFilePath = "./src/lib/data/redirects.json";
function readRedirectsFromFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const redirects2 = JSON.parse(data);
    return redirects2;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return [];
  }
}
const redirects = readRedirectsFromFile(jsonFilePath);
let delayAmount = 1200;
const handleFetch = async ({ event, request, fetch }) => {
  let logStart = `(${env})${(/* @__PURE__ */ new Date()).toLocaleString()}`;
  let pathName = new URL(request.url).pathname;
  console.info(
    `${logStart}: ${event.url.pathname} >> ${request.method} ${pathName}`
  );
  try {
    await delay(delayAmount);
    return fetch(request);
  } catch (error) {
    console.error(
      `${logStart} >> Error: ${event.url.pathname} >> ${error.status}: ${pathName}`
    );
    console.error("Fetch error:", error);
    return new Response(error, { status: error.status });
  }
};
const handle = async ({ event, resolve }) => {
  const redirect = redirects.find((item) => event.url.pathname === item.source);
  if (redirect)
    return new Response("", {
      status: 301,
      headers: { Location: redirect.destination }
    });
  return await resolve(event);
};
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { handle, handleFetch };
//# sourceMappingURL=hooks.server-CXQ8hEqT.js.map
