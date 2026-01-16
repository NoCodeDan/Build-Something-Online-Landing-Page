import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Example query - you can modify or remove this
// This will work once you run `npx convex dev` which generates the _generated folder
export const exampleQuery = query({
  args: {},
  handler: async (ctx) => {
    // Example: return some data
    return { message: "Hello from Convex!" };
  },
});

// Example mutation - you can modify or remove this
export const exampleMutation = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    // Example: do something with the data
    return { success: true, received: args.text };
  },
});
