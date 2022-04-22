import type { Context } from "https://edge-bootstrap.netlify.app/v1/index.ts";

export default (_request: Request, context: Context): Response => {
  return context.json(context.geo);
};
