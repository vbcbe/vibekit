import { serve } from "inngest/next";
import { inngest, runAgent, createSession } from "@/lib/inngest";

export const maxDuration = 800;

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [runAgent, createSession],
});
