export type EmailPayload = {
    to: string;
    from: string;
    subject: string;
    html: string;
    text?: string;
};

export interface EmailProvider {
    sendEmail(params: EmailPayload): Promise<void>;
}
