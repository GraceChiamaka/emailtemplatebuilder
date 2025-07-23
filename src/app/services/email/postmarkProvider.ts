import { EmailProvider, EmailPayload } from "../types";
import * as postmark from "postmark";
const apiKey = process.env.API_KEY ?? "API_KEY";

export const createPostmarkProvider = (): EmailProvider => {
    const client = new postmark.ServerClient(apiKey);

    const sendEmail = async ({ to, from, subject, html, text }: EmailPayload) => {
        await client.sendEmail({
            From: from,
            To: to,
            Subject: subject,
            HtmlBody: html || "",
            TextBody: text || "",
        });
    };

    return { sendEmail };
};
