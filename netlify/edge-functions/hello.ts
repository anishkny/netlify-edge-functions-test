import type { Context } from "netlify:edge";

export default async (request: Request, context: Context): Promise<Response> => {
  return new Response("Hello, world!");
};
