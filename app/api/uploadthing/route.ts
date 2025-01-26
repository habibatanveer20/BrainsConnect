import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST: originalPOST } = createRouteHandler({
  router: ourFileRouter,
});

// Error handling for POST requests
export const POST = async (req: any) => {
  try {
    return await originalPOST(req);
  } catch (error) {
    console.error("Error handling upload:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
