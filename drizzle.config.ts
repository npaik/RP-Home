import { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema/*",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DRIZZLE_DATABASE_URL!,
  },
  out: "./drizzle",
} satisfies Config;
