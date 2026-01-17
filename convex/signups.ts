import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("signups")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      throw new Error("This email is already registered");
    }

    // Get the count of existing signups to generate next participant number
    const allSignups = await ctx.db.query("signups").collect();
    const participantNumber = allSignups.length + 1; // Start from 001

    // Create new signup
    const signupId = await ctx.db.insert("signups", {
      name: args.name,
      email: args.email,
      participantNumber: participantNumber,
      createdAt: Date.now(),
    });

    // Return the participant number explicitly
    return participantNumber;
  },
});
