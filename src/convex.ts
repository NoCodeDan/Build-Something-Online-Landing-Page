import { ConvexReactClient } from "convex/react";

// This will be set when you run `npx convex dev`
// It will create a .env.local file with CONVEX_URL
const convexUrl = import.meta.env.VITE_CONVEX_URL || "";

export const convex = new ConvexReactClient(convexUrl);
