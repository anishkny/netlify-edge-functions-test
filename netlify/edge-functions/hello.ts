import type { Context } from "netlify:edge";

export default (_request: Request, context: Context): Response => {
  const res = `${
    JSON.stringify(
      {
        geo: context.geo,
        env: Deno.env.toObject(),
      },
      null,
      2,
    )
  }`;
  return new Response(res);
};
