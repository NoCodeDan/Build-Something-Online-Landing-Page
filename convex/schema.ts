import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  signups: defineTable({
    name: v.string(),
    email: v.string(),
    participantNumber: v.number(),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_participant_number", ["participantNumber"]),
});
