"use server";
import { EmailProvider } from "../types";
import sgMail from "@sendgrid/mail";

const apiKey = process.env.API_KEY ?? "API_KEY";

export const createSendGridProvider = async (): Promise<EmailProvider> => {
    sgMail.setApiKey(apiKey);

    const sendEmail: EmailProvider["sendEmail"] = async ({ to, from, subject, html, text }) => {
        await sgMail.send({ to, from, subject, html, text });
    };

    return { sendEmail };
};
