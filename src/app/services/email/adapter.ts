import { createSendGridProvider } from "./sendgridProvider";
import { createPostmarkProvider } from "./postmarkProvider";
import { EmailProvider } from "../types";

type ProviderName = "sendgrid" | "postmark";

export const createEmailProvider = (name: ProviderName): EmailProvider => {
    switch (name) {
        case "sendgrid":
            return createSendGridProvider();
        case "postmark":
            return createPostmarkProvider();
        default:
            throw new Error(`Unsupported email provider: ${name}`);
    }
};
