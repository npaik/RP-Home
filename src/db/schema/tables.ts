import { serial, text, pgTable } from "drizzle-orm/pg-core";

export const contact = pgTable("contact", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
});
