"use server";

import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db"
import { contact } from "@/db/schema/tables";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phone, subject, message } = req.body.formData;

    try {
      await db.insert(contact).values({
        fullName: name,
        email,
        phone,
        subject,
        message,
      });

      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error saving email", error);
      res.status(500).json({ error: "Failed to save message" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
