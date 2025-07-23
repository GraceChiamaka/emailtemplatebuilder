import { BlockData } from "@container/types";
import { createEmailProvider } from "@services/email/adapter";
import {
    convertToJSON,
    exportBlocksToEmailHTML,
    wrapInEmailSkeleton,
    downloadHtmlFile,
} from "@utils/convert";
import { saveToLocalStorage } from "@utils/localStorage";
import { useCanvas } from "./useCanvas";
const SAVE_KEY = "EMAILER";

export const useBlocks = () => {
    const { blocks, savedBlocks, mergeBlocks } = useCanvas();

    const isBlocksSynced = () => {
        const strDrafts = JSON.stringify(blocks);
        const mainBlocks = JSON.stringify(savedBlocks);
        return strDrafts === mainBlocks;
    };
    const handleHTMLTemplate = (blocks: BlockData[]) => {
        const content = exportBlocksToEmailHTML(blocks);
        const htmlEmbed = wrapInEmailSkeleton(content);
        return htmlEmbed;
    };

    const handleExport = () => {
        if (isBlocksSynced()) {
            downloadHtmlFile(handleHTMLTemplate(savedBlocks), "emailTemplate.html");
        } else {
            mergeBlocks();
            handleExport();
        }
    };

    const handleSave = () => {
        if (isBlocksSynced()) {
            const content = convertToJSON(blocks);
            saveToLocalStorage(SAVE_KEY, content);
        } else {
            mergeBlocks();
            handleSave();
        }
    };
    const handleSend = async () => {
        const htmlEmbed = handleHTMLTemplate(blocks);

        const emailProvider = createEmailProvider("sendgrid");
        const emailPayload = {
            to: "grace@mailinator.com",
            from: "support@emailer.com",
            subject: "Welcome!",
            html: htmlEmbed,
        };
        try {
            await emailProvider.sendEmail(emailPayload);
        } catch (error) {
            const err = error as any;
            console.error(err);

            if (err.response) {
                console.error(err.response.body);
            }
        }
    };
    return {
        handleExport,
        handleSave,
        handleSend,
    };
};
