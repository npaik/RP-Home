"use server";

import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { contact } from "@/db/schema/tables";
import sgMail from "@sendgrid/mail";

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("Missing SENDGRID_API_KEY");
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

      const msg = {
        to: ["contact@risepartners.ca, tony.paik@risepartners.ca"],
        from: "tony.paik@risepartners.ca",
        subject: `New Contact Form Submission: ${subject}`,
        text: `You have received a new message from ${name} (${email}, ${phone}):\n\n${message}`,
        html: `<p>You have received a new message from <strong>${name}</strong> (${email}, ${phone}):</p><p>${message}</p>`,
      };

      await sgMail.send(msg);
      console.log("Email sent");

      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending message:", error);

      // @ts-ignore
      if (error.response) {
        // @ts-ignore
        console.error("Error response body:", error.response.body);
      }

      res.status(500).json({ error: "Failed to save message or send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
